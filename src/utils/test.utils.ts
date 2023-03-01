import { FormInstance } from "antd";
import configureStore from "redux-mock-store";

export const handleFixWindowMatchMediaTest = () => {
  return Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: any) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
};

const initialState = {};
export const mockStore = configureStore();
export const store = mockStore(initialState);
export const mockFunction = jest.fn;

export const testForm: FormInstance<any> = {
  scrollToField: mockFunction(),
  getFieldValue: mockFunction(),
  getFieldsValue: mockFunction(),
  getFieldError: mockFunction(),
  getFieldsError: mockFunction(),
  getFieldInstance: mockFunction((opts) => (c: any) => c),
  isFieldTouched: mockFunction(),
  isFieldsTouched: mockFunction(() => true),
  isFieldsValidating: mockFunction((opts) => true),
  resetFields: mockFunction(),
  setFieldsValue: mockFunction(),
  isFieldValidating: mockFunction(),
  setFields: mockFunction(),
  validateFields: mockFunction(),
  submit: mockFunction(),
  getFieldWarning: mockFunction(),
  setFieldValue: mockFunction(),
};


