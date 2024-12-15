export interface CardHeader {
  label: string;
  index: number;
}

export interface CardCell {
  /** 当前所在列 */
  colIndex: number;
  /** 当前所在行 */
  rowIndex: number;
  /** TODO 暂定的值 */
  value: string;
}

export interface Card {
  colHeader: CardHeader[];
  rowHeader: CardHeader[];
  cardItemArr: CardCell[][];
}

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};
