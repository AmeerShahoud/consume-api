export interface IJobTitle {
  updatedBy: number;
  updatedOn: string | Date;
  clientData: string;
  arName: string;
  enName: string;
  status: number;
  statusDateModified: string | Date;
  jobType: number;
  isSystem: boolean;
  statusInfo: {};
  typeInfo: {};
  id: number;
}
