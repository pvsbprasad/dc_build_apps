## Create SAP BTP Destination

Before using the SAP Build project, you must configure a destination in your SAP BTP subaccount.


1. Go to your SAP BTP subaccount and navigate to **Connectivity → Destinations**, then click **Create Destination**.

![](img/image1.png)

2. Click on **Destinations** in the left panel and select **Create Destination** to open the configuration form.

![](img/image2.png)

3. When prompted, select **From Scratch**.

![](img/image3.png)

### Destination Configuration

![](img/image4.png)

## SAP AI Core Destination Configuration : 
Please copy all the properties, including the **Additional Properties**, to the destination configuration accordingly.


| Field                 | Value                       |
| --------------------- | --------------------------- |
| **Name**              | `SAP_AICore`                |
| **Description**       | `SAP AI Core Service`       |
| **Type**              | `HTTP`                      |
| **Proxy Type**        | `Internet`                  |
| **Authentication**    | `OAuthClientCredentials`    |
| **Client ID**         | *SAP AI Core Client ID*     |
| **Client Secret**     | *SAP AI Core Client Secret* |
| **Token Service URL** | `<URL>/oauth/token`         |
| **URL**               | *SAP AI Core Service URL*   |

### Additional Properties

| Property Name              | Value  |
| -------------------------- | ------ |
| `DynamicDestination`       | `true` |
| `WebIDEEnabled`            | `true` |
| `HTML5.DynamicDestination` | `true` |
| `AppgyverEnabled`          | `true` |

---



