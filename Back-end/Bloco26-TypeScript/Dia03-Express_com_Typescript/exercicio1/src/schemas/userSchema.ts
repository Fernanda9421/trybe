const errors = {
  nameBlank: '"name" is required',
  nameLength: '"name" length must be at least 3 characters long',
  passwordBlank: '"password" is required',
  passwordLength: '"password" must be a minimun of 6 ans a maximun of 12 characters',
  emailBlank: '"email" is required',
  emailFormat: '"email" must have the format email@email.com'
}

const codeBadRequest = 400;

const blank = (value:string) => (!value);
const lengthLessThan = (value:string, min:number) => (value.length < min);
const lengthBiggerThan = (value:string, max:number) => (value.length > max);
const invalidFormat = (value:string) => (!(value.includes('@') && value.includes('.com')));

export function validadeName(name:string) {
  switch (true) {
    case blank(name):
      return { code: codeBadRequest, message: errors.nameBlank };
    case lengthLessThan(name, 3):
      return { code: codeBadRequest, message: errors.nameLength };
    default: return {};
  }
};

export function validadeEmail(email: string) {
  switch (true) {
    case blank(email):
      return { code: codeBadRequest, message: errors.emailBlank };
    case invalidFormat(email):
      return { code: codeBadRequest, message: errors.emailFormat };
    default: return {};
  }
}

export function validadePassword(password: string) {
  switch (true) {
    case blank(password):
      return { code: codeBadRequest, message: errors.passwordBlank };
    case lengthLessThan(password, 6):
      return { code: codeBadRequest, message: errors.passwordLength };
    case lengthBiggerThan(password, 12):
      return { code: codeBadRequest, message: errors.passwordLength };
    default: return {};
  }
};
