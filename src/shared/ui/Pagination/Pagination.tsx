"use client";

import Link from "next/link";
import ReactPaginate from "react-paginate";

import { useRouter } from "nextjs-toploader/app";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { DotsThreeIcon } from "@phosphor-icons/react/dist/ssr/DotsThree";

import styles from "./Pagination.module.css";
import clsx from "clsx";
import { useSearchParams, usePathname } from "next/navigation";

interface Props {
  pageCount: number;
  currentPage: number;
}

export default function Pagination({ pageCount, currentPage }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const buildURL = (selectedPage: number) => {
    const currentParams = new URLSearchParams(searchParams?.toString());

    currentParams.set("page", `${selectedPage}`);

    const query = currentParams.toString();

    return `${pathname}?${query}`;
  };

  const onChangePage = (selectedPage: number) => {
    router.push(buildURL(selectedPage + 1), { scroll: true });
  };

  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      hrefBuilder={(page, pageCount) =>
        page >= 1 && page <= pageCount ? buildURL(page) : "#"
      }
      onPageChange={({ selected }) => onChangePage(selected)}
      forcePage={currentPage - 1}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      breakLabel={<DotsThreeIcon />}
      nextLabel={<ArrowRightIcon />}
      previousLabel={<ArrowLeftIcon />}
      containerClassName={styles["pagination"]}
      nextClassName={clsx(styles["pagination-item"], styles["arrow"])}
      previousClassName={clsx(styles["pagination-item"], styles["arrow"])}
      pageClassName={styles["pagination-item"]}
      breakLinkClassName={styles["break-link-item"]}
      activeClassName={styles["active"]}
      disabledClassName={styles["disabled"]}
      renderOnZeroPageCount={null}
    />
  );
}
