export interface actionResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}
