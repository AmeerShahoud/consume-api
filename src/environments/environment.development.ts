const apiUrl = 'http://eblaepm.no-ip.org:9092/cdi/api/v1';

export const environment = {
  api: {
    authUrl: apiUrl + '/auth/internal',
    jobTitleUrl: apiUrl + '/entity/job-title',
    emailTemplateUrl: apiUrl + '/entity/email-template',
  },
};
