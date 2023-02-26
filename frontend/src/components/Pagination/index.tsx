import { ClientAccountPage, ClientPage } from "types/client";
import { DebtPage } from "types/debt";
import { ProductPage } from "types/product";

type PageProps = {
    page: ClientPage | ClientAccountPage | DebtPage | ProductPage;
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

                <li className={`page-item ${page.number}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number = 1)}>1</button>
                </li>
                <li className={`page-item ${page.number}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number = 2)}>2</button>
                </li>
                <li className={`page-item ${page.number}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number = 3)}>3</button>
                </li>
                <li className={`page-item ${page.number}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number = 4)}>4</button>
                </li>
                <li className={`page-item ${page.number}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number = 5)}>5</button>
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