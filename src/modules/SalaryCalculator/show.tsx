import React from 'react';
import { Card, Table } from 'antd';

const ResultDisplay = ({ result }) => {
  const columns = [
    { title: '项目', dataIndex: 'item', key: 'item' },
    { title: '个人缴纳', dataIndex: 'personal', key: 'personal' },
    { title: '公司缴纳', dataIndex: 'company', key: 'company' }
  ];

  const data = [
    { key: '1', item: '养老保险', personal: result.socialInsuranceDetails.pension.personal?.toFixed(2), company: result.socialInsuranceDetails.pension.company?.toFixed(2) },
    { key: '2', item: '医疗保险', personal: result.socialInsuranceDetails.medical.personal?.toFixed(2), company: result.socialInsuranceDetails.medical.company?.toFixed(2) },
    { key: '3', item: '失业保险', personal: result.socialInsuranceDetails.unemployment.personal?.toFixed(2), company: result.socialInsuranceDetails.unemployment.company?.toFixed(2) },
    { key: '4', item: '工伤保险', personal: result.socialInsuranceDetails.workInjury.personal?.toFixed(2), company: result.socialInsuranceDetails.workInjury.company?.toFixed(2) },
    { key: '5', item: '生育保险', personal: result.socialInsuranceDetails.maternity.personal?.toFixed(2), company: result.socialInsuranceDetails.maternity.company?.toFixed(2) },
    { key: '6', item: '住房公积金', personal: result.socialInsuranceDetails.housingFund.personal?.toFixed(2), company: result.socialInsuranceDetails.housingFund.company?.toFixed(2) },
    { key: '7', item: '补充公积金', personal: result.socialInsuranceDetails.supplementaryHousingFund.personal?.toFixed(2), company: result.socialInsuranceDetails.supplementaryHousingFund.company?.toFixed(2) },
    { key: '8', item: '总计', personal: result.totalDeductionsPersonal?.toFixed(2), company: result.totalDeductionsCompany?.toFixed(2) }
  ];

  return (
    <Card title="计算结果">
      <Table columns={columns} dataSource={data} pagination={false} />
      <div style={{ marginTop: '20px' }}>
        <p>应税收入：{result.taxableIncome?.toFixed(2)}</p>
        <p>个人所得税（老税法）：{result.taxOld?.toFixed(2)}</p>
        <p>个人所得税（新税法）：{result.taxNew?.toFixed(2)}</p>
        <p>税后工资（老税法）：{result.netSalaryOld?.toFixed(2)}</p>
        <p>税后工资（新税法）：{result.netSalaryNew?.toFixed(2)}</p>
      </div>
    </Card>
  );
};

export default ResultDisplay;