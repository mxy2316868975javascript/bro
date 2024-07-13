import { useState } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import {
  Button,
  ConfigProvider,
  InputNumber,
  Input,
  Card,
  Watermark,
  Checkbox,
  Form,
  Select,
} from "antd";
import type { ColorPickerProps, GetProp, WatermarkProps } from "antd";
type Color = GetProp<ColorPickerProps, "color">;
// import { Header } from './Header'
// import { Footer } from './Footer'
// import { Section } from './Section'
// import { Project } from './Project'
// import { Waline } from '../widgets/Waline'
// import { IntroTyped } from '../widgets/Typed'
// import { Pictures } from '../widgets/Pictures'
// import { sectionsInfo } from '../config'
const gridStyle1: React.CSSProperties = {
  width: "34%",
  textAlign: "center",
  margin: "0 auto",
};
const gridStyle: React.CSSProperties = {
  width: "33%",
  textAlign: "center",
  margin: "0 auto",
};

interface WatermarkConfig {
  content: string;
  color: string | Color;
  fontSize: number;
  zIndex: number;
  rotate: number;
  gap: [number, number];
  offset?: [number, number];
}

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
      pension: pension.toFixed(0),
      medical: medical.toFixed(0),
      unemployment: unemployment.toFixed(0),
      housingFund: housingFund.toFixed(0),
      tax: tax.toFixed(0),
      netSalary: netSalary.toFixed(0),
    };

    setDetails(detail);
  };

  const [config, setConfig] = useState<WatermarkConfig>({
    content: "牛马",
    color: "rgba(0, 0, 0, 0.15)",
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

  const watermarkProps: WatermarkProps = {
    content,
    zIndex,
    rotate,
    gap,
    offset,
    font: {
      color: typeof color === "string" ? color : color.toRgbString(),
      fontSize,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // 渲染
  return (
    <main>
      <Watermark {...watermarkProps}>
        <div className="App" style={{ height: "100%" }}>
          <h1 className="text-2xl font-bold mb-6 text-center">
            上海市五险一金及税后工资计算器
          </h1>

          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, margin: "0 auto", padding: '0 16px' }}
            initialValues={{ prev: 5000, base: 5000, baseplus: 5000 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="税前工资：">
              <Form.Item name="prev" noStyle>
                <InputNumber
                  min={1}
                  className="mr-4"
                  style={{ width: "100%" }}
                />
              </Form.Item>
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
                <Button
                  style={{ position: "absolute", top: -20, right: -80 }}
                  onClick={calculateDetails}
                  type="primary"
                  htmlType="submit"
                >
                  计算
                </Button>
              </ConfigProvider>
            </Form.Item>

            <Form.Item label="税后工资：" name="next" labelCol={{ span: 8 }}>
              <Input className="mr-4" disabled />
            </Form.Item>

            <Form.Item label="社保汇缴基数：">
              <Form.Item name="base" noStyle>
                <InputNumber
                  min={1}
                  className="mr-4"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Checkbox
                name="extra1"
                style={{ position: "absolute", top: 4, right: -90 }}
              >
                自定义
              </Checkbox>
            </Form.Item>

            <Form.Item label="公积金汇缴基数：">
              <Form.Item name="baseplus" noStyle>
                <InputNumber
                  min={1}
                  className="mr-4"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Checkbox
                name="extra"
                style={{ position: "absolute", top: 4, right: -90 }}
              >
                自定义
              </Checkbox>
            </Form.Item>
            <Form.Item label="补充公积金：" name="sss" labelCol={{ span: 8 }}>
              <Select
                placeholder="请选择"
                options={[
                  { value: 0.05, label: "5%" },
                  { value: 0.06, label: "6%" },
                  { value: 0.07, label: "7%" },
                  { value: 0.08, label: "8%" },
                ]}
              />
            </Form.Item>
          </Form>

          {details && (
            <div className="mt-6">
              <Card title="五险一金汇缴明细：">
                <Card>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    &nbsp;
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    个人应缴部分：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    单位应缴部分：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    养老保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.pension} 元 <span style={{float:'right'}}>(8%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.pension} 元 <span style={{float:'right'}}>(8%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    医疗保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.medical} 元 <span style={{float:'right'}}>(2%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.medical} 元 <span style={{float:'right'}}>(2%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    失业保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.unemployment} 元<span style={{float:'right'}}>(0.5%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.unemployment} 元<span style={{float:'right'}}>(0.5%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    基本住房公积金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.housingFund} 元 <span style={{float:'right'}}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.housingFund} 元 <span style={{float:'right'}}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    补充住房公积金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.housingFund} 元 <span style={{float:'right'}}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.housingFund} 元 <span style={{float:'right'}}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    生育保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {/* {details.housingFund} 元  */}
                    <span style={{float:'right'}}>(1%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {/* {details.housingFund} 元  */}
                    <span style={{float:'right'}}>(1%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    个人所得税：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.tax} 元
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.tax} 元
                  </Card.Grid>
                </Card>
              </Card>
            </div>
          )}
        </div>
      </Watermark>
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
