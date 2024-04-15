import styles from "@/styles/Home.module.css";
import VerticalBar from "@/components/Vertical Bar";
import HorizontalChart from "@/components/Horizontal Chart";
import PieChart from "@/components/Pie Chart";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <VerticalBar/>
        <HorizontalChart/>
        <PieChart/>
      </main>
    </>
  );
}
