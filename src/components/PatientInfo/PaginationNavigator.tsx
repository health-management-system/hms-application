import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import React from "react";

type PaginationNavigatorProps = {
    onLeftClick?: (...event: any) => void;
    onRightClick?: (...event: any) => void;
    currentIndex?: number;
    lastPage?: number
};
function PaginationNavigator(props: PaginationNavigatorProps) {
    return (
        <div className="flex w-max items-center space-x-3 cursor-pointer">
            {/* Left pointer button */}
            <FaAngleLeft
                className="hover:scale-110"
                onClick={props.onLeftClick}
                data-cy="PaginationNavigator-leftclick"
            />
            <p className="w-max whitespace-nowrap ">
                <span data-cy="PaginationNavigator-currentpage" className="underline">
                    {/* Current Page */}
                    {props.currentIndex?.toLocaleString()}
                </span>{" "}
                of <span data-cy="PaginationNavigator-lastpage">
                    {/* Last Page */}
                    {props.lastPage?.toLocaleString()}
                </span>
            </p>
            {/* Right pointer button */}
            <FaAngleRight
                className="hover:scale-110 cursor-pointer"
                onClick={props.onRightClick}
                data-cy="PaginationNavigator-rightclick"
            />
        </div>
    );
}

export default PaginationNavigator