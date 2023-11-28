export interface IDownloadCard{
   fileName: string;
   routeName: string;
   textCard: string;
}

export interface IDownloadCardProps extends IDownloadCard {
   handleDownloadEva: (fileName: string, routeName: string) => void;
}