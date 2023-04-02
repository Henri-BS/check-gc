import { ClientAccountPage, ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { PaidPage } from "types/paid";
import { ProductPage } from "types/product";
import "./styles.css";

type PageProps = {
    page: ClientPage | ClientAccountPage | DebtPage | ProductPage | PaidPage;
    onPageChange: Function;
} 
function Pagination({ page, onPageChange }: PageProps) {

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${page.first ? `disable` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <li className={"page-item"}>
                    <span className="page-link no-hover">{page.number + 1} de {page.totalPages} </span>
                    </li>

                <li className={`page-item ${page.last ? `disabled` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;