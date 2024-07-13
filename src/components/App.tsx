import { useState } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { Button, ConfigProvider, InputNumber, Input, Card } from "antd";

// import { Header } from './Header'
// import { Footer } from './Footer'
// import { Section } from './Section'
// import { Project } from './Project'
// import { Waline } from '../widgets/Waline'
// import { IntroTyped } from '../widgets/Typed'
// import { Pictures } from '../widgets/Pictures'
// import { sectionsInfo } from '../config'

const gridStyle: React.CSSProperties = {
  width: "50%",
  textAlign: "center",
  margin: '0 auto'
};

const colors1 = ["#6253E1", "#04BEFE"];
const getHoverColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors: string[]) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export function App() {
  const [grossSalary, setGrossSalary] = useState(5000);
  const [details, setDetails] = useState<any>(null);

  const calculateDetails = () => {
    const pensionRate = 0.08; // 养老保险比例
    const medicalRate = 0.02; // 医疗保险比例
    const unemploymentRate = 0.005; // 失业保险比例
    const housingFundRate = 0.07; // 住房公积金比例

    const pension = grossSalary * pensionRate;
    const medical = grossSalary * medicalRate;
    const unemployment = grossSalary * unemploymentRate;
    const housingFund = grossSalary * housingFundRate;

    const socialInsurance = pension + medical + unemployment + housingFund;
    const taxableIncome = grossSalary - socialInsurance - 5000; // 假设5000元的免税额

    let tax = 0;

    if (taxableIncome <= 0) {
      tax = 0;
    } else if (taxableIncome <= 3000) {
      tax = taxableIncome * 0.03;
    } else if (taxableIncome <= 12000) {
      tax = taxableIncome * 0.1 - 210;
    } else if (taxableIncome <= 25000) {
      tax = taxableIncome * 0.2 - 1410;
    } else if (taxableIncome <= 35000) {
      tax = taxableIncome * 0.25 - 2660;
    } else if (taxableIncome <= 55000) {
      tax = taxableIncome * 0.3 - 4410;
    } else if (taxableIncome <= 80000) {
      tax = taxableIncome * 0.35 - 7160;
    } else {
      tax = taxableIncome * 0.45 - 15160;
    }

    const netSalary = grossSalary - socialInsurance - tax;

    const detail = {
      pension: pension.toFixed(2),
      medical: medical.toFixed(2),
      unemployment: unemployment.toFixed(2),
      housingFund: housingFund.toFixed(2),
      tax: tax.toFixed(2),
      netSalary: netSalary.toFixed(2),
    };

    setDetails(detail);
  };

  // 渲染
  return (
    <main>
      <div className="App" style={{ height: "100%" }}>
        <h1 className="text-2xl font-bold mb-6 text-center">
          上海市五险一金及税后工资计算器
        </h1>
        <div className="pt-4">
          <label>
            税前工资：
            <InputNumber
              min={1}
              className="mr-4"
              style={{ width: 160 }}
              defaultValue={5000}
              onChange={setGrossSalary}
            />
          </label>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(
                    ", "
                  )})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
                    colors1
                  ).join(", ")})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
                    colors1
                  ).join(", ")})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button onClick={calculateDetails} type="primary">
              计算
            </Button>
          </ConfigProvider>
        </div>

        <div>
          <label>
            税后工资：
            <Input
              className="mr-4"
              disabled
              style={{ width: 160 }}
              value={details?.netSalary}
            />
          </label>

          <Button
            style={{ visibility: "hidden" }}
            onClick={calculateDetails}
            type="primary"
          >
            计算
          </Button>
        </div>

        {details && (
          <div className="mt-6">
            <Card title="五险一金汇缴明细：">
              <Card.Grid style={gridStyle}>养老保险：</Card.Grid>
              <Card.Grid hoverable={false} style={gridStyle}>
                {details.pension} 元
              </Card.Grid>
              <Card.Grid style={gridStyle}>医疗保险：</Card.Grid>
              <Card.Grid style={gridStyle}>{details.medical} 元</Card.Grid>
              <Card.Grid style={gridStyle}>失业保险：</Card.Grid>
              <Card.Grid style={gridStyle}>{details.unemployment} 元</Card.Grid>
              <Card.Grid style={gridStyle}>住房公积金：</Card.Grid>
              <Card.Grid style={gridStyle}>{details.housingFund} 元</Card.Grid>
              <Card.Grid style={gridStyle}>个人所得税：</Card.Grid>
              <Card.Grid style={gridStyle}>{details.tax} 元</Card.Grid>
            </Card>
          </div>
        )}
      </div>
      {/* <Header />

      <Section {...sectionsInfo[0]}>
        <Project />
      </Section>

      <Section {...sectionsInfo[1]}>
        <IntroTyped />
      </Section>

      <Section {...sectionsInfo[2]}>
        <Pictures />
      </Section>

      <Section {...sectionsInfo[3]}>
        <Waline />
      </Section>

      <Footer /> */}
    </main>
  );
}
