import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";



const Uncle = ({asset}) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'Shohana'}></Cousin>
                
            </section>
            <p >Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk </button>
        </div>
    );
};

export default Uncle;