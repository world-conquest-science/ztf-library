import { TCart, TFormat } from "@ztf-library/types";
import client from "./clients";

export function add(item: TFormat): TCart {}

export function update_quantity(item: TFormat, quantity: number): TCart {}

export function remove_item(item: TFormat): TCart {}

export function remove_all(): TCart {}
