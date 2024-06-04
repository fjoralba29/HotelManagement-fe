import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 80%;
  max-width: 800px;
`;

export const SectionTitle = styled.h2`
  color: rgb(235, 165, 80);
  border-bottom: 2px solid rgb(235, 165, 80);
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 28px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
`;

export const InfoItem = styled.div`
  flex: 1 1 45%;
  margin-bottom: 20px;

  h3 {
    color: grey;
    margin-bottom: 5px;
    font-size: 18px;
  }

  p {
    color: #555;
    margin: 0;
  }
`;

export const ReserveButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  margin: 20px auto 0;

  &:hover {
    background-color: #0056b3;
  }
`;