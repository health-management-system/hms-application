import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

type PaginationNavigatorProps = {
    onLeftClick?: (...event: any) => void;
    onRightClick?: (...event: any) => void;
    currentIndex?: number;
};
function PaginationNavigator(props: PaginationNavigatorProps) {
    return (
        <div className="flex w-max items-center space-x-3 cursor-pointer">
            <FaAngleLeft
                className="hover:scale-110"
                onClick={props.onLeftClick}
            />
            <p className="w-max whitespace-nowrap ">
                <span className="underline">
                    {props.currentIndex?.toLocaleString()}
                </span>{" "}
                of 10
            </p>
            <FaAngleRight
                className="hover:scale-110 cursor-pointer"
                onClick={props.onRightClick}
            />
        </div>
    );
}

export default PaginationNavigator