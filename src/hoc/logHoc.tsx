import React, { ComponentType, useEffect } from "react";

function logHoc<Props>(WrappedComponent: ComponentType<Props>) {
  return function AopHoc(props: Props) {
    useEffect(() => {
      console.log("Current Props: ", props);
      return () => {
        console.log("Previous props: ", props);
      };
    }, [props]);
    return <WrappedComponent {...props} />;
  };
}

export default logHoc;
