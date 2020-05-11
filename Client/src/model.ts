export interface LoginDto {
  mail: string;
  password: string;
}

export interface UserToCreateDto {
  mail: string;
  password: string;
  username: string;
  role: number;
}

export interface ProjectStepOne {
  stepOne: string,
  stepTwo: string,
  stepThree: string,
  stepFour: string,
  stepFive: string,
  stepSix: string,
  stepSeven: string
}
