import { ZodError } from "zod";

export function filterError(e: ZodError): Array<any> {
  const errors = [];

  for (let i = 0; i < e.errors.length; i++) {
    errors.push({
      message: e.errors[i].message,
      path: e.errors[i].path,
    });
  }

  return errors;
}
