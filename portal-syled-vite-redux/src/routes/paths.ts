interface IPaths {
  Root: string,
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
}

interface IEndPointsPaths {
  user: string,
  login: string,
}
const paths: IPaths = {
  Root: "/",
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
};

const endPointsPaths: IEndPointsPaths = {
  user: "/user",
  login: "/login",
}

export { paths, endPointsPaths };
