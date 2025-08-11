import { useLocation, useNavigate } from "react-router-dom"
import "./searchResultsPage.css"
import { useEffect, useMemo, useState } from "react";
import { searchProducts } from "../../api";
import HeroSection from "../../components/heroSection/HeroSection"
import DetailsCard from "../../components/detailsCard/DetailsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n.js";

const SearchResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [maxButtons, setMaxButtons] = useState(7);
    const [layoutDir, setLayoutDir] = useState(document.documentElement.getAttribute("dir") || "ltr");
    const limit = 12;

    const {t} = useTranslation("pages");
    const currentLang = i18n.language || "en"

    useEffect(() => {
        const calculateButtons = () => {
            const width = window.innerWidth;
            if(width > 1024) setMaxButtons(7);
            else if(width > 768) setMaxButtons(5);
            else setMaxButtons(3);
        }

        calculateButtons();
        window.addEventListener("resize", calculateButtons);
        return () => window.removeEventListener("resize", calculateButtons);
    }, [])

    // Detect language/direction changes from Google Translate
    useEffect(() => {
        const observer = new MutationObserver(() => {
        setLayoutDir(document.documentElement.getAttribute("dir") || "ltr");
        });

        observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["dir", "lang", "class"],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const queryParam = decodeURIComponent(new URLSearchParams(location.search).get("query") || "");
        const pageParam = new URLSearchParams(location.search).get("page");
        setQuery(queryParam);
        setCurrentPage(Number(pageParam) || 1);

        const fetchResults = async() => {
            setError("");
            setLoading(true);
            try {
                const { data } = await searchProducts(queryParam, currentPage, limit);
                setSearchResults(data.products);
                setTotalRecords(data.totalRecords)
                setTotalPages(data.totalPages);
            } catch (error) {
                setSearchResults([])
                setTotalRecords(0)
                setError(t("searchResultsPage.results.error"))
                console.error("Error searching product: ", error)
            } finally {
                setLoading(false)
            }
        }

        if(queryParam) fetchResults();
    }, [location, currentPage, t])

    const startRecord = (currentPage - 1) * limit + 1;
    const endRecord = Math.min(startRecord + limit - 1, totalRecords);

    const collection = searchResults.map((result) => ({
        title: result.title?.[currentLang] || result.title?.en || "No Title",
        image: result.details?.image || "../../../public/noImage.jpg",
        description: result.details?.description?.[currentLang] || result.details?.description?.en || "No description available"
    }))


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) 
            navigate(`?query=${query}&page=${page}`);
    }

    const paginationRange = useMemo(() => {
        const range = []
        const half = Math.floor(maxButtons / 2);

        if(totalPages <= maxButtons){
            for(let i = 1; i<=totalPages; i++)
                range.push(i)
        } else if(currentPage <= half + 1) {
            for(let i = 1; i <= maxButtons - 1; i++)
                range.push(i);
            range.push("...");
        } else if(currentPage > totalPages - half) {
            range.push("...");
            for(let i = totalPages - (maxButtons -2); i <= totalPages; i++)
                range.push(i);
        } else {
            range.push("...");
            for(let i = currentPage - half; i <= currentPage + half; i++)
                range.push(i);
            range.push("...");
        }

        return range;
    }, [currentPage, totalPages, maxButtons]);

  return (
    <div className="searchResultsPage">
        <Helmet>
            <title>Search Results for &apos;&apos;{query || 'unknown'}&apos;&apos; - Future Structures</title>
            <meta
            name="description"
            content={`Find the best products matching your search for '${query || 'unknown'}' on Future Structures. Browse through our extensive catalog and discover high-quality solutions for your projects.`}
            />
            <meta name="keywords" content={`${query}, products, search results, Future Structures`} />
            <meta name="author" content="Future Structures" />
            <link rel="canonical" href={`https://www.futurestructures.com/search?query=${query || 'unknown'}&page=${currentPage}`} />
        </Helmet>
        <HeroSection title={`Product search results for '${query || "unknown"}'`} />
        <div className="results">
            <p
                tabIndex={0}
                className="result"
                dangerouslySetInnerHTML={{
                    __html: t("searchResultsPage.results.found", {
                    count: `<span class="big">${totalRecords}</span>`,
                    plural: totalRecords === 1 ? "" : "s"
                    })
                }}
            />
            {totalRecords >= 1 && (
                <>
                    <p
                        tabIndex={0}
                        className="productRange"
                        dangerouslySetInnerHTML={{
                            __html: t("searchResultsPage.results.displaying", {
                            start: `<span class="big">${startRecord}</span>`,
                            end: `<span class="big">${endRecord}</span>`,
                            total: `<span class="big">${totalRecords}</span>`
                            })
                        }}
                    />
                </>
            )}
        </div>
        {loading && <p>{t("searchResultsPage.results.loading")}</p>}
        {error && <p tabIndex={0} className="error">{error}</p>}
        {!loading && !error && (
            <>
                <div key={`top-${query}-${currentPage}-${totalPages}-${layoutDir}`} className={`pagination ${layoutDir === "rtl" ? "rtl" : ""}`}>
                    <button
                        tabIndex={0} 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pageNavBtn"
                    >
                        <FontAwesomeIcon className="pageNavIcon" icon={faChevronLeft}/>
                    </button>
                    {paginationRange.map((page, index) => 
                        page === "..." ? (
                            <span key={index} className="ellipsis">
                                ...
                            </span>
                        ) : (
                            <button
                                tabIndex={0} key={index} onClick={() => handlePageChange(page)} className={currentPage === page ? "active" : ""}>
                                {page}
                            </button>
                        )
                    )}
                    <button
                        tabIndex={0} 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="pageNavBtn"
                    >
                        <FontAwesomeIcon className="pageNavIcon" icon={faChevronRight} />
                    </button>
                </div>
                <DetailsCard collections={collection} class_name="searchPage"/>
                <div key={`bottom-${query}-${currentPage}-${totalPages}-${layoutDir}`} className={`pagination ${layoutDir === "rtl" ? "rtl" : ""}`}>
                    <button
                        tabIndex={0} 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="pageNavBtn"
                    >
                        <FontAwesomeIcon className="pageNavIcon" icon={faChevronLeft}/>
                    </button>
                    {paginationRange.map((page, index) => 
                        page === "..." ? (
                            <span key={index} className="ellipsis">
                                ...
                            </span>
                        ) : (
                            <button
                                tabIndex={0} key={index} onClick={() => handlePageChange(page)} className={currentPage === page ? "active" : ""}>
                                {page}
                            </button>
                        )
                    )}
                    <button
                        tabIndex={0} 
                        onClick={() => handlePageChange(currentPage + 1)} 
                        disabled={currentPage === totalPages}
                        className="pageNavBtn"
                    >
                        <FontAwesomeIcon className="pageNavIcon" icon={faChevronRight} />
                    </button>
                </div>
            </>
        )}
    </div>
  )
}

export default SearchResultsPage