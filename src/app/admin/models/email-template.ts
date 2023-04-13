export interface IEmailTemplate {
  updatedBy: number;
  updatedOn: string | Date;
  id: number;
  clientData: string;
  arName: string;
  enName: string;
  status: boolean;
  isGlobal: boolean;
  enSubjectTemplate: string;
  enBodyTemplate: string;
  arSubjectTemplate: string;
  arBodyTemplate: string;
}
