import React, { useState } from 'react';
import { Form, InputNumber, Select, Switch, Button, Row, Col, Typography } from 'antd';
import { calculateDetails } from '../calcular/utils';

const { Title } = Typography;

const cities = {
  Beijing: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
    housingFund: 0.12,
    supplementaryFund: 0.03,
  },
  Shanghai: {
    pension: 0.08,
    medical: 0.02,
    unemployment: 0.005,
    housingFund: 0.07,
    supplementaryFund: 0.03,
  },
};

const calculateTax = (salary:any, isNewTaxLaw:any) => {
  // Simplified tax calculation for demonstration purposes
  if (isNewTaxLaw) {
    if (salary <= 5000) return 0;
    return (salary - 5000) * 0.03;
  } else {
    if (salary <= 3500) return 0;
    return (salary - 3500) * 0.1;
  }
};

const SalaryCalculator = () => {
  const [form] = Form.useForm();
  const [city, setCity] = useState('Beijing');
  const [isNewTaxLaw, setIsNewTaxLaw] = useState(true);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    form.validateFields().then(values => {
      setResult(calculateDetails(values, isNewTaxLaw));
    });
  };

  return (
    <div>
      <Title level={2}>税后工资计算器</Title>
      <Form form={form} layout="vertical">
        <Form.Item name="salary" label="税前工资" rules={[{ required: true, message: '请输入税前工资' }]}>
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="city" label="城市" rules={[{ required: true, message: '请选择城市' }]}>
          <Select defaultValue={city} onChange={value => setCity(value)}>
            {Object.keys(cities).map(city => (
              <Select.Option key={city} value={city}>
                {city}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="使用新税法">
          <Switch checked={isNewTaxLaw} onChange={checked => setIsNewTaxLaw(checked)} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleCalculate}>
            计算
          </Button>
        </Form.Item>
      </Form>
      {result && (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Title level={4}>个人缴纳明细</Title>
              <p>养老保险: {result?.personalInsurance.toFixed(2)} 元</p>
              <p>医疗保险: {result?.personalMedical.toFixed(2)} 元</p>
              <p>失业保险: {result?.personalUnemployment.toFixed(2)} 元</p>
              <p>住房公积金: {result?.personalHousingFund.toFixed(2)} 元</p>
              <p>补充公积金: {result?.personalSupplementaryFund.toFixed(2)} 元</p>
              <p>总计: {result?.personalTotal.toFixed(2)} 元</p>
            </Col>
            <Col span={12}>
              <Title level={4}>企业缴纳明细</Title>
              <p>养老保险: {result?.companyInsurance.toFixed(2)} 元</p>
              <p>医疗保险: {result?.companyMedical.toFixed(2)} 元</p>
              <p>失业保险: {result?.companyUnemployment.toFixed(2)} 元</p>
              <p>住房公积金: {result?.companyHousingFund.toFixed(2)} 元</p>
              <p>补充公积金: {result?.companySupplementaryFund.toFixed(2)} 元</p>
              <p>总计: {result?.companyTotal.toFixed(2)} 元</p>
            </Col>
          </Row>
          <Title level={4}>税后月薪</Title>
          <p>税后工资: {result?.afterTaxSalary.toFixed(2)} 元</p>
          <p>个人所得税: {result?.tax.toFixed(2)} 元</p>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
