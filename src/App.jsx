import { useCallback, useEffect, useState } from "react";
import "./styles/App.scss";
import DataService from "./services/DataServices";
import Dropdown from "./components/Dropdown";
import Grid from "./components/Grid";

function App() {
  const [state, setState] = useState({
    team: "None",
    user: "None",
    sales: [],
  });
  const [infoState, setInfoState] = useState({
    teams: [],
    users: [],
    sales: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: String(value),
    }));
    if (name === "user") {
      let teamId = infoState.users.filter(
        (item) => item.id === Number(value)
      )[0];
      setState({
        ...state,
        [name]: String(value),
        team: teamId ? String(teamId.team) : String(state.team),
      });
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: String(value),
      }));
    }
  };

  const handleGetData = useCallback(async () => {
    const dataService = new DataService();
    Object.keys(infoState).forEach(async (item) => {
      const { data } = await dataService.getAll({ collection: item });
      setInfoState((prevState) => ({
        ...prevState,
        [String(item)]: data,
      }));
    });
    
  // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataService = new DataService();

    if (String(state.team).toLowerCase() !== "none") {
      if (state.user.toLowerCase() !== "none") {
        const { data: sales } = await dataService.getSales({
          collection: "users",
          id: state.user,
        });
        setState({
          ...state,
          sales,
        });
      } else {
        const { data: sales } = await dataService.getSales({
          collection: "teams",
          id: state.team,
        });
        setState({
          ...state,
          sales,
        });
      }
    } else {
      setState({ ...state, sales: infoState.sales });
    }
  };

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Dropdown App</h1>
        <span>Selecciona</span>
        <div className="container__dropdowns">
          <Dropdown
            name={"team"}
            arrayData={infoState.teams}
            disabled={infoState.teams.length === 0}
            key={`keyDrop-teams`}
            value={state.team}
            handleChange={handleChange}
          />
          <Dropdown
            name={"user"}
            arrayData={infoState.users}
            disabled={infoState.users.length === 0}
            key={`keyDrop-user`}
            value={state.user}
            handleChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </div>
      </form>

      <Grid array={state.sales} />
      {/* {state.sales > 0 ? <Grid arrayData={state.sales} /> : null} */}
    </main>
  );
}

export default App;
