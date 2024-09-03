import { ComponentPropsWithoutRef, ElementType } from "react";

export type Combine<T, K> = K & Omit<T, keyof K>;
export type CombineElementProps<T extends ElementType, K> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;
export type OverridableProps<T extends ElementType, K> = {
  as?: T;
} & CombineElementProps<T, K>;

export interface PaginationType {
  totalPage: number;
  currentPage: number;
  totalElements: number;
}
