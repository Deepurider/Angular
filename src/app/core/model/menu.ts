export interface Menu {
  name: string;
  component: string;
  url: string;
  icon: string;
  disabled: boolean;
  child: Menu[];
}

export interface Person {
  id: number;
  name: string;
}

export interface GridColumn {
  header: string;
  field: string;
}
