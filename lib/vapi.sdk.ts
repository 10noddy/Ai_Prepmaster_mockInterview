import Vapi from '@vapi-ai/web';

export const vapi= new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);

// Validate environment variables
// const vapiWebToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN;
// const vapiWorkflowId = process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID;

// if (!vapiWebToken) {
//     console.error('NEXT_PUBLIC_VAPI_WEB_TOKEN is not defined. Please check your environment variables.');
// }

// if (!vapiWorkflowId) {
//     console.error('NEXT_PUBLIC_VAPI_WORKFLOW_ID is not defined. Please check your environment variables.');
// }

// export const vapi = new Vapi(vapiWebToken || '');

// // Export validation helpers
// export const isVapiConfigured = () => {
//     return !!(vapiWebToken && vapiWorkflowId);
// };

// export const getVapiWorkflowId = () => vapiWorkflowId;
