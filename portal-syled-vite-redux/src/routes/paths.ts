interface IPaths {
  Calendar: string,
  Forms: string,
  Modal: string,
  Reports: string,
  Redux: string,
  ReduxSimple: string,
  Tools: string,
  LabFont: string,
  Beautify: string,
  Table: string,
  Login: string,
  Land: string,
}

interface IEndPointsPaths {
  user: string,
  login: string,
}
const paths: IPaths = {
  Land: "/",
  Calendar: "/Calendar",
  Forms: "/Forms",
  Modal: "Modal",
  Reports: "/Reports",
  Redux: "/Redux",
  ReduxSimple: "/ReduxSimple",
  Tools: "/Tools",
  LabFont: "Lab/Fonts",
  Beautify: "/Beautify",
  Table: "Tables",
  Login: "/Login",
};

const endPointsPaths: IEndPointsPaths = {
  user: "/user",
  login: "/login",
}

export { paths, endPointsPaths };
