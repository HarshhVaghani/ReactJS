import { data, data1 } from "../App";
import { useContext } from "react";

const Com_C = () => {

  const user = useContext(data)
  const profile = useContext(data1)

  return (
    <>
      <div>Com_C</div>
      <ul>
        <li>{user.name}</li>
        <li>{user.gender}</li>
        <li>{profile.name}</li>
        <li>{profile.gender}</li>
      </ul>
      {/* <data.Consumer>
        {(data) => {
          return (
            <>
              <h1>{data.name}</h1>
              <h1>{data.gender}</h1>
              <data1.Consumer>
                {(data) => {
                  return (
                    <>
                      <h1>{data.name}</h1>
                      <h1>{data.gender}</h1>
                    </>
                  );
                }}
              </data1.Consumer>
            </>
          );
        }}
      </data.Consumer> */}
    </>
  );
};

export default Com_C;
