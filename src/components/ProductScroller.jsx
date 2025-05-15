import { FiPlus } from 'react-icons/fi';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';
import { useRef, useState, useEffect, UIEvent } from 'react';
import { addToCart } from '../store/slice'
import { useDispatch } from 'react-redux';
import ProductCarousel from './ProductCarousel';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
export default function ProductScroller() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [popupMsg, setPopupMsg] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const updateArrows = () => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        if (modalProduct) {
            // disable background scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // re-enable when modal closes
            document.body.style.overflow = '';
        }
        // cleanup on unmount
        return () => { document.body.style.overflow = ''; };
    }, [modalProduct]);


    useEffect(() => {
        if (!popupMsg) return;
        const timer = setTimeout(() => setPopupMsg(null), 4000);
        return () => clearTimeout(timer);
    }, [popupMsg]);


    // onClick handlers
    const scrollLeft = () =>
        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    const scrollRight = () =>
        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });

    // watch for scroll & resize
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        // initial check
        updateArrows();
        // listeners
        el.addEventListener('scroll', updateArrows, { passive: true });
        window.addEventListener('resize', updateArrows);
        return () => {
            el.removeEventListener('scroll', updateArrows);
            window.removeEventListener('resize', updateArrows);
        };
    }, []);


    const handleAddClick = (product) => {
        setModalProduct(product);
    };



    const handleConfirmAdd = () => {
        setIsLoading(true);
        dispatch(addToCart(modalProduct));
        // keep loader visible for a moment so the user can see it
        setTimeout(() => {
            setIsLoading(false);
            setPopupMsg(`Added “${modalProduct.name}” to cart!`);
            setModalProduct(null);
        }, 500);
    };
    const handleCloseModal = () => setModalProduct(null);

    const products = [1, 2, 3, 4, 5].map((i) => ({
        id: i,
        name: `Product ${i}`,
        price: i === 3 ? 885.0 : 395.0,
        img: `/images/product_${i}.png`,
        images: Array(5).fill(`/images/product_${i}.png`),
        rating: 4,
    }))

    return (
        <div className="relative bg-[#efefef] py-16 px-4 sm:px-8 lg:px-16">
            <h2 className="text-3xl text-center mb-8 uppercase tracking-widest font-normal">
                ALL PRODUCTS COLLECTION
            </h2>

            {/* Left arrow (hidden when at start) */}
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="
                 arrow-button–rtl 
          absolute top-1/2 left-2 -translate-y-1/2
          bg-white p-2 rounded-full shadow-lg z-10
          hover:bg-gray-100 transition
        "
                    aria-label="Scroll left"
                >
                    <HiChevronLeft className="w-6 h-6 text-gray-700 arrow-icon" />
                </button>
            )}

            {/* Scrollable row */}
            <div
                ref={scrollRef}
                onScroll={() => updateArrows()}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="flex flex-row space-x-8 overflow-x-auto overflow-y-hidden pb-4 no-scrollbar"
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex-shrink-0 w-[500px] flex flex-col items-center text-center"
                    >
                        <div className="relative w-full overflow-hidden rounded-lg group">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-auto object-cover transition duration-300 group-hover:scale-95"
                            />

                            {/* plus-on-hover */}
                            <button
                                onClick={() => handleAddClick(product)}
                                className="
                  absolute bottom-2 right-2
                  bg-white p-2 rounded-md shadow-md
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                "
                                aria-label="Add to cart"
                            >
                                <FiPlus className="w-5 h-5 text-black transition-transform duration-300 ease-in-out hover:rotate-90" />
                            </button>
                        </div>

                        <h3 className="text-xl font-normal mt-4">{product.name}</h3>
                        <p className="text-gray-600 ">
                            From ${product.price.toFixed(2)} USD
                        </p>
                    </div>
                ))}
            </div>

            {/* Right arrow (hidden when at end) */}
            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="arrow-button–ltr
          absolute top-1/2 right-2 -translate-y-1/2
          bg-white p-2 rounded-full shadow-lg z-10
          hover:bg-gray-100 transition
        "
                    aria-label="Scroll right"
                >
                    <HiChevronRight className="w-6 h-6 text-gray-700 arrow-icon" />
                </button>
            )}
            {popupMsg && (
                <div
                    className="
            absolute bottom-0 right-0
            bg-white text-black shadow-lg
            py-3 px-5 rounded-md
            transition-opacity duration-300
          "
                >
                    {popupMsg}
                </div>
            )}
            {modalProduct && (


                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                    <div className="pointer-events-auto bg-white rounded-lg  mx-4 p-6 h-[65vh] w-[45vw] relative shadow-lg">


                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                            aria-label="Close modal"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col sm:flex-row h-full">
                            {/* Left half: image fills and centers */}
                            <div className="w-full sm:w-1/2 flex items-center justify-center">
                                <ProductCarousel images={modalProduct.images} />
                            </div>
                            {/* Right half: product info */}
                            <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 overflow-auto font-normal">
                                <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="text-3xl tracking-[0.15em] font-normal">{modalProduct.name}</h3>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, idx) =>
                                        idx < modalProduct.rating ? (
                                            <AiFillStar key={idx} className="w-5 h-5 text-black" />
                                        ) : (
                                            <AiOutlineStar key={idx} className="w-5 h-5 text-gray-300" />
                                        )
                                    )}
                                    <span style={{ fontFamily: "Montserrat, sans-serif" }} className="ml-2 text-gray-600 text-sm font-normal tracking-[0.15em]">
                                        ({modalProduct.rating}.0) 552 REVIEWS
                                    </span>
                                </div>
                                <p style={{ fontFamily: "Montserrat, sans-serif" }} className="mt-2 text-gray-700 font-normal tracking-[0.15em]">
                                    ${modalProduct.price.toFixed(2)} USD
                                </p>
                                <div className="w-full h-px bg-gray-300 my-4" />
                                <p style={{ fontFamily: "Montserrat, sans-serif" }} className="mt-4 text-gray-600 font-normal tracking-[0.15em]">
                                    This is a great product that you’re about to add to your cart.
                                </p>


                                <div className="flex justify-center mt-12">
                                    <button
                                        disabled={isLoading}
                                        onClick={handleConfirmAdd}
                                        type="button"
                                        className={`
    group relative inline-block px-6 py-3 overflow-hidden text-sm font-normal
    border border-black
    ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
  `}
                                    >
                                        {/* sliding bg span */}
                                        <span
                                            className={`
      absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform
      ${isLoading
                                                    ? 'translate-x-0'
                                                    : '-translate-x-full group-hover:translate-x-0'}
    `}
                                        />

                                        {/* text */}
                                        <span
                                            className={`
      relative z-10 transition-colors duration-300
      ${isLoading
                                                    ? 'text-white'
                                                    : 'text-black group-hover:text-white'}
    `}
                                        >
                                            {isLoading ? 'ADDING…' : 'SHOP NOW'}
                                        </span>

                                        {/* linear loader bar */}

                                    </button>
                                    <div className="absolute left-0 right-0 bottom-0 h-2 bg-gray-200">
                                        <div
                                            className="h-full bg-black transition-all duration-500 ease-linear"
                                            style={{ width: isLoading ? '100%' : '0' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            )
            }
        </div >
    );
}