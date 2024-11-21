export type Environment = 'development' | 'staging' | 'production';

export interface ActionResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  error?: {
    code: string;
    message: string;
  }
}
