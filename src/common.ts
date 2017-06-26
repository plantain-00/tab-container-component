export type TabContainerData = {
    isActive: boolean;
    title: string;
    // tslint:disable-next-line:ban-types
    component: string | Function;
    data: any; // the data will be passed to the component as `data` props
    canClose?: boolean;
};
