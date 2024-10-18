import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = 'https://hml.pickingup.com.br/backend/api/autonomous-treadmill';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTExMDNkMS1lYTEwLTQ2NDktODA5ZC05MGQ3NmY1Y2YzYzciLCJqdGkiOiI0ODdmMDNiZjMwY2ZjNTY1OTcwZjNlM2NhZWMzZGNkYWFkZmNmNzBlNzgyZTBmODBkMzhhZDhhMmRjYjQyZTg3NDkxOTI4ZjU0Y2NmZTRlMCIsImlhdCI6MTcyNzk4MzE5Mi45ODQzNTQsIm5iZiI6MTcyNzk4MzE5Mi45ODQzNjIsImV4cCI6MTcyOTI3OTE5Mi45NjYyMDEsInN1YiI6IjRkZjY2MzliLWUwNTctNGE0YS1iY2Y2LWM5ZjZhNTJhOTUwMCIsInNjb3BlcyI6WyJhbGxvd2VkLXBpY2tpbmd1cC1ob20iLCJhbGxvd2VkLXBpY2tpbmd1cC1zdGFnZSIsImFsbG93ZWQtcGlja2luZ3VwLXByb2QiXX0.QVe2954URPIHEaxHC9Dmgsuwd95wm8rDEA2rfmN-CWkHCE71KPJaGRYUtxvwmKM_NbuHMChpzPL8jRUIKBQB3J83qx0fThQbQLDpoPMlH1dxNgRr2arwSKQma5vun3v7D9Ev4d9qiJnGRjW8ik_iOvYp9py-hLocZso0YeIpWUJjzEdHxMQE1EN18mZmjC2L4W2eQBi1FB5iJLfRmtNBJUJij7M6kgbMkCfFrnY326sm0jav-nwNbCodPdRVjxgbEIvuz8sZw-tjBTRgr6scY9BnloETMuzyKCfe3m9D5kcXHvsOOyoDq3j8GXD-o88KajyfZjUbvM-VSVsGADE7FrB8ugz-D8Wq666q3jBKLtgxYDOeov73WEgAADqrPGrpkBe7soVRzd0EHRn_1AB1IqXMjn0BNC3mac_zCusOCwLEpQHl63jnrrigkIwlQD4-uoLrIAD7MqvCKe8oBrWMgpR_-l5_8ASJv69zYCnz4my7_w601raLy62tvf27rG-Tg4lXO8YPIL74Q6CcYiK6HPZefpJws2SBuoPwqGl_oaEZIuhKqZOdIYpCyR6yldho3YDheeB9cv4YCQMJZQ1bGYaomBmKf_m1b5O7MsIz35cA_Vh3qxNtMGi6xBpivfL9UUL1q08lSw6XnUSdW-6yWtOFWJExoYqTtvJg6j_Nm6o'
    };

    try {
      const response = await fetch(url, { method: 'GET', headers });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const dataGet = await response.json();
      console.log(dataGet);
      
      const groupVehicle = {};

      dataGet[0].forEach(order => {
        const vehicle = order.vehicle;
        if (vehicle) {
          if (!groupVehicle[vehicle]) {
            groupVehicle[vehicle] = [];
          }
          groupVehicle[vehicle].push(order);
        }
      });
      console.log(groupVehicle);
      setData(groupVehicle);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ data, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};
