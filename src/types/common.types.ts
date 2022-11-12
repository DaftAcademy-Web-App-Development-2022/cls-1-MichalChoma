import type { NextPage } from "next/types";
import React from "react";

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
    getLayout?: (page: React.ReactElement) => React.ReactElement;
};