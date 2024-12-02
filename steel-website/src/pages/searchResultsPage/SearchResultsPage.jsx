import { useLocation, useNavigate } from "react-router-dom"
import "./searchResultsPage.css"
import { useEffect, useState } from "react";
import { searchProducts } from "../../api";
import HeroSection from "../../components/heroSection/HeroSection"
import DetailsCard from "../../components/detailsCard/DetailsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
    const limit = 12;

    useEffect(() => {
        const queryParam = new URLSearchParams(location.search).get("query");
        const pageParam = new URLSearchParams(location.search).get("page");
        setQuery(queryParam);
        setCurrentPage(Number(pageParam) || 1);

        const fetchResults = async() => {
            setError("");
            setLoading(true);
            try {
                const { data } = await searchProducts(queryParam, currentPage, limit);
                console.log(data);
                setSearchResults(data.products);
                setTotalRecords(data.totalRecords)
                setTotalPages(data.totalPages);
            } catch (error) {
                setSearchResults([])
                setTotalRecords(0)
                setError("Sorry we do not have what you are looking for.")
                console.error("Error searching product: ", error)
            } finally {
                setLoading(false)
            }
        }

        if(queryParam) fetchResults();
    }, [location, currentPage])

    const startRecord = (currentPage - 1) * limit + 1;
    const endRecord = Math.min(startRecord + limit - 1, totalRecords);

    const collection = searchResults.map((result) => ({
        title: result.title,
        image: result.details.image,
        description: result.details.description || "No description available"
    }))

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) 
            navigate(`?query=${query}&page=${page}`);
    }

    const generatePageRange = () => {
        const maxButtons = window.innerWidth > 1024 ? 7 : 
            window.innerWidth > 768 ? 5 : 3;
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

        return range
    };

    const paginationRange = generatePageRange();

  return (
    <div className="searchResultsPage">
        <HeroSection title={`Product search results for '${query || "unknown"}'`} />
        <div className="results">
            <p className="result">
                Found <span className="big">{totalRecords}</span> result{totalRecords === 1 ? "" : "s"}
            </p>
            {totalRecords >= 1 && (
                <>
                    <p className="productRange">
                        Displaying <span className="big">{startRecord} - {endRecord}</span> of <span className="big">{totalRecords}</span> results
                    </p>
                </>
            )}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
            <>
                <DetailsCard collections={collection} class_name="searchPage"/>
                <div className="pagination">
                    <button 
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
                            <button key={index} onClick={() => handlePageChange(page)} className={currentPage === page ? "active" : ""}>
                                {page}
                            </button>
                        )
                    )}
                    <button 
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