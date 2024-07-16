import { useState } from "react";
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
import {
  colors1,
  getActiveColors,
  getHoverColors,
  gridStyle,
  gridStyle1,
  watermarkProps,
} from "./constant";
import { calculateDetails } from "./utils";

const Calcular = () => {
  const [details, setDetails] = useState<any>(null);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    const result = await calculateDetails(values, true);
    console.log("Success:", values);
    console.log("details", details);
    console.log("result", result);
    setDetails(result);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // 渲染
  return (
    <main>
      <Watermark {...watermarkProps}>
        <div className="App" style={{ height: "100%" }}>
          <h1 className="text-2xl font-bold my-6 text-center">
            上海市五险一金及税后工资计算器
          </h1>

          <Form
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, margin: "0 auto", padding: "0 16px" }}
            initialValues={{
              salary: 5000,
              base: 5000,
              baseplus: 5000,
              extra: false,
              extra2: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="税前工资：">
              <Form.Item name="salary" noStyle>
                <InputNumber
                  min={1}
                  prefix="￥"
                  className="mr-4"
                  style={{ width: "100%" }}
                  addonAfter={
                    <Form.Item name="suffix" noStyle>
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
                          className="mt-0"
                          size="small"
                          type="primary"
                          htmlType="submit"
                        >
                          计算
                        </Button>
                      </ConfigProvider>{" "}
                    </Form.Item>
                  }
                />
              </Form.Item>
            </Form.Item>

            <Form.Item label="税后工资：" name="next" labelCol={{ span: 8 }}>
              <Input prefix="￥" className="mr-4" disabled />
            </Form.Item>

            <Form.Item label="社保汇缴基数：">
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.extra1 !== curValues.extra1
                }
              >
                {() => {
                  return (
                    <Form.Item name="base" noStyle>
                      <InputNumber
                        min={1}
                        prefix="￥"
                        disabled={!form.getFieldValue("extra1")}
                        style={{ width: "calc(100% - 32px)" }}
                        className="mr-4"
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
              <Form.Item noStyle name="extra1" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Form.Item>

            <Form.Item label="公积金汇缴基数：">
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, curValues) =>
                  prevValues.extra3 !== curValues.extra3
                }
              >
                {() => {
                  return (
                    <Form.Item name="baseplus" noStyle>
                      <InputNumber
                        min={1}
                        prefix="￥"
                        disabled={!form.getFieldValue("extra3")}
                        style={{ width: "calc(100% - 32px)" }}
                        className="mr-4"
                      />
                    </Form.Item>
                  );
                }}
              </Form.Item>
              <Form.Item noStyle name="extra3" valuePropName="checked">
                <Checkbox />
              </Form.Item>
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
                    {details?.personalInsurance.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(8%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.companyInsurance.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(8%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    医疗保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.personalMedical.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(2%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.companyMedical.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(2%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    失业保险金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.personalUnemployment.toFixed(2)} 元
                    <span style={{ float: "right" }}>(0.5%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.companyUnemployment.toFixed(2)} 元
                    <span style={{ float: "right" }}>(0.5%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    基本住房公积金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.personalHousingFund.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.companyHousingFund.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    补充住房公积金：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.personalSupplementaryFund.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details?.companySupplementaryFund.toFixed(2)} 元{" "}
                    <span style={{ float: "right" }}>(7%)</span>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle1}>
                    个人所得税：
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.personalTotal.toFixed(2)} 元
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={gridStyle}>
                    {details.companyTotal.toFixed(2)} 元
                  </Card.Grid>
                </Card>
              </Card>
            </div>
          )}
        </div>
      </Watermark>
    </main>
  );
};

export default Calcular;
