import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5_PREVIEW = 'gpt-3.5-turbo-1106', // Remove this after 2023-12-11. Source https://openai.com/blog/new-models-and-developer-products-announced-at-devday#updated-gpt-3-5-turbo
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_TURBO = 'gpt-4-1106-preview' // This is only a preview and will be replaced in the coming weeks (2023-11-07). Source: https://openai.com/blog/new-models-and-developer-products-announced-at-devday#gpt-4-turbo-with-128k-context
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5-TURBO',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'GPT-3.5-TURBO',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_PREVIEW]: { // Remove this after 2023-12-11. Source https://openai.com/blog/new-models-and-developer-products-announced-at-devday#updated-gpt-3-5-turbo
    id: OpenAIModelID.GPT_3_5_PREVIEW,
    name: 'GPT-3.5-TURBO-preview',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4_TURBO]: { // This is only a preview and will be replaced in the coming weeks (2023-11-07). Source: https://openai.com/blog/new-models-and-developer-products-announced-at-devday#gpt-4-turbo-with-128k-context
    id: OpenAIModelID.GPT_4_TURBO,
    name: 'GPT-4-TURBO',
    maxLength: 380000,
    tokenLimit: 128000,
  },
};
