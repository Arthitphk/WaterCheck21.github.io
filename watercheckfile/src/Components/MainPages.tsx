import { useState, useEffect } from "react";


const MainPages = () => {
    const[Weight, setWeight]=useState<number>(0);
    const [Result, setResult] = useState<number>(0);
    const [Theme, setTheme] = useState("light");

    const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(+event.target.value)
        setResult(Weight*2.2*(30/2))
        console.log(Weight*2.2*(30/2))
        };

        const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setTheme(event.target.value);
            console.log(Theme);
          };

          useEffect(() => {
            const rootElement = document.documentElement;
            rootElement.classList.remove("light-theme", "dark-theme");
            rootElement.classList.add(Theme === "light" ? "light-theme" : "dark-theme");
          }, [Theme]);
      


  return (
    <div>
        <h1>ควรดื่มน้ำวันละเท่าไร</h1>
        <h2>{Result}มล.</h2>
        <label htmlFor="name"></label>
        <input type="text" id="username" name="name" placeholder="น้ำหนักของคุณ(กิโลกรัม)"    onChange={onChangeWeight}/>

        <div style={{
            position: "fixed",
            bottom: "100px",
            right: "100px",
        }}>
        
        <select style={{ padding: "15px 15px" }}
          value={Theme}
          onChange={handleThemeChange}>
            <option value="light">☀️Light Theme</option>
            <option value="dark">🌙 Dark Theme</option>
          </select>
        
        </div>
    </div>

    
  )
}

export default MainPages