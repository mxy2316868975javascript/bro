// src/components/SalaryCalculator.js
import React, { useState } from 'react';
import { Form, InputNumber, Select, Button, Row, Col, Card, Radio } from 'antd';
import ResultDisplay from './show';

const { Option } = Select;

const cities = [
  {
    name: '上海',
    rates: {
      pension: { personal: 0.08, company: 0.16 },
      medical: { personal: 0.02, company: 0.095 },
      unemployment: { personal: 0.005, company: 0.005 },
      workInjury: { personal: 0, company: 0.003 },
      maternity: { personal: 0, company: 0.01 },
      housingFund: { personal: 0.07, company: 0.07 }
    }
  },
  {
    name: '北京',
    rates: {
      pension: { personal: 0.08, company: 0.16 },
      medical: { personal: 0.02, company: 0.1 },
      unemployment: { personal: 0.005, company: 0.008 },
      workInjury: { personal: 0, company: 0.004 },
      maternity: { personal: 0, company: 0.008 },
      housingFund: { personal: 0.12, company: 0.12 }
    }
  },
  // 继续添加其他城市的社保和公积金比例
  // ...
];

const taxRates = {
  old: [
    { upTo: 1500, rate: 0.03, deduction: 0 },
    { upTo: 4500, rate: 0.1, deduction: 105 },
    { upTo: 9000, rate: 0.2, deduction: 555 },
    { upTo: 35000, rate: 0.25, deduction: 1005 },
    { upTo: 55000, rate: 0.3, deduction: 2755 },
    { upTo: 80000, rate: 0.35, deduction: 5505 },
    { upTo: Infinity, rate: 0.45, deduction: 13505 }
  ],
  new: [
    { upTo: 3000, rate: 0.03, deduction: 0 },
    { upTo: 12000, rate: 0.1, deduction: 210 },
    { upTo: 25000, rate: 0.2, deduction: 1410 },
    { upTo: 35000, rate: 0.25, deduction: 2660 },
    { upTo: 55000, rate: 0.3, deduction: 4410 },
    { upTo: 80000, rate: 0.35, deduction: 7160 },
    { upTo: Infinity, rate: 0.45, deduction: 15160 }
  ]
};

const calculateTax = (income, taxScheme) => {
  for (let i = 0; i < taxScheme.length; i++) {
    if (income <= taxScheme[i].upTo) {
      return income * taxScheme[i].rate - taxScheme[i].deduction;
    }
  }
  return 0;
};

const SalaryCalculator = () => {
  const [form] = Form.useForm();
  const [result, setResult] = useState(null);

  const onFinish = (values) => {
    const { city, basicSalary, bonus, otherIncome, deductions, socialInsuranceBase = 30000, housingFundBase, supplementaryHousingFund, taxScheme } = values;
    const selectedCity = cities.find((c) => c.name === city);
    const calculateDetail = (type, base) => ({
        personal: base * selectedCity.rates[type].personal,
        company: base * selectedCity.rates[type].company,
    });
    console.log('selectedCity', calculateDetail('pension', socialInsuranceBase))

    const socialInsuranceDetails = {
      pension: calculateDetail('pension', socialInsuranceBase),
      medical: calculateDetail('medical', socialInsuranceBase),
      unemployment: calculateDetail('unemployment', socialInsuranceBase),
      workInjury: calculateDetail('workInjury', socialInsuranceBase),
      maternity: calculateDetail('maternity', socialInsuranceBase),
      housingFund: calculateDetail('housingFund', housingFundBase),
      supplementaryHousingFund: {
        personal: supplementaryHousingFund,
        company: supplementaryHousingFund
      }
    };

    console.log('socialInsuranceDetails', socialInsuranceDetails)

    const totalDeductionsPersonal = Object.values(socialInsuranceDetails).reduce((acc, item) => acc + item.personal, 0);
    const totalDeductionsCompany = Object.values(socialInsuranceDetails).reduce((acc, item) => acc + item.company, 0);

    const taxableIncome = basicSalary + bonus + otherIncome - totalDeductionsPersonal - deductions;

    const taxOld = calculateTax(taxableIncome, taxRates.old);
    const taxNew = calculateTax(taxableIncome, taxRates.new);

    const netSalaryOld = taxableIncome - taxOld;
    const netSalaryNew = taxableIncome - taxNew;

    setResult({
      socialInsuranceDetails,
      totalDeductionsPersonal,
      totalDeductionsCompany,
      taxOld,
      taxNew,
      netSalaryOld,
      netSalaryNew,
      taxableIncome
    });
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title="工资明细输入">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item name="city" label="城市" rules={[{ required: true }]}>
              <Select>
                {cities.map((city) => (
                  <Option key={city.name} value={city.name}>{city.name}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="basicSalary" label="基本工资" rules={[{ required: true }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="bonus" label="奖金">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="otherIncome" label="其他收入">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="deductions" label="扣除">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="socialInsuranceBase" label="社保汇缴基数" rules={[{ required: false }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="housingFundBase" label="公积金汇缴基数" rules={[{ required: false }]}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="supplementaryHousingFund" label="补充公积金">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="taxScheme" label="税法" rules={[{ required: false }]}>
              <Radio.Group>
                <Radio value="old">老税法</Radio>
                <Radio value="new">新税法</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">计算</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={12}>
        {result && <ResultDisplay result={result} />}
      </Col>
    </Row>
  );
};

export default SalaryCalculator;
