## Configure BTP Integration for Registered Products

1. Go to the **Integrations** tab and click **Add Integration**.

   ![](Img/1.png)

2. In the **Integrations** tab, select **BTP Integration**.

   ![](Img/2.png)

3. Select the **BTP Destination** configured for **CX** to retrieve **Registered Products**.

   ![](Img/3.png)

4. Click **Install Integration as REST API**.

   ![](Img/4.png)

5. Click the **`+` (Add)** icon to create a new integration endpoint.

   ![](Img/5.png)

6. Enter the **Name** as `Registered Product`, uncheck all available options, and click **Add**.

   ![](Img/6.png)

7. In **Relative Path and Query**, enter the following path:

   ```
   /sap/c4c/api/v1/registered-product-service/registeredProducts?$filter=account/displayId eq '1000240'&$select=displayId,id,referenceProduct/displayId,referenceProduct/description
   ```

   ![](Img/7.png)

8. Set the **Response Mapper** as shown below, then click **Run Test** and select **Auto-detect fields from response**: and click **Save**

   ```
   {
     records: response.data.value,
     driverCode: response.status
   }
   ```

   ![](Img/8.png)

---
