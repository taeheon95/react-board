import React, { ComponentType, useEffect } from "react";

function logHoc<Props>(WrappedComponent: ComponentType<Props>) {
  return function LogHoc(props: Props) {
    useEffect(() => {
      console.log(
        "%c Current Props : ",
        "color:#009ff2;font-weight:bold",
        props
      );
      return () => {
        console.log(
          "%c Previous props : ",
          "color:#43a547;font-weight:bold",
          props
        );
      };
    }, [props]);
    return <WrappedComponent {...props} />;
  };
}

export default logHoc;
