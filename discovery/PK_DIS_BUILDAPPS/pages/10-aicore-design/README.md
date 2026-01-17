# Designing the App

1. Let's start with a clean canvas. Click on the element shown in the page and then click on the **bin** icon to delete this element.  
 
 ![](img/7_1.png)

2. Delete the other line item click on the **bin** icon to delete this element. 

3. Drag the container.  

 ![](img/8.png)

4. Add an Container

* Drag the **Container** component into the white space area.
* Select the **Style** option.
* Choose **Primgary Card** as the style.

![](img/10.png)

5. Add a Title to the Container

* Drag the **Title** component into the same container.
* Select the **Style** option.
* Choose **Page Secondary Heading – Primgary Card**.

![](img/11.png)

6. Select **Title** → **Layout** → set **Text Alignment** to **Center**.

![](img/12.png)

7. Select **Title** → **Properties** → update the **Content** field to **Self Service**.

![](img/13.png)

8. Drag the **text** box to → **Container** → update the content **Find answers 24/7, on your schedule** 

![](img/14.png)

9. Drag the **text** box to → **Container** → update the content **Find answers 24/7, on your schedule** 

![](img/14.png)

10. Select the **text**, go to the **Layout** tab, and choose **Text Align → Center**.

![](img/15.png)

11. Click on the **Container**, navigate to **Style → Primary Card**, and click **Edit**.

![](img/16.png)

12. In **Style**, go to **Background Color** and select **Information** and Click on **Save** to apply the changes.

![](img/16.png)

13. Drag **two containers**, placing one below the other. In the **second container**, drag an **input field** and rename it to **“Subject.”**

![](img/17.png)

14. Click on the **Input Field** → select **Value** → choose **Data and Variables** → select **App Variables** → choose **Subject** → click **Save**.

![](img/21.png)

![](img/22.png)

![](img/23.png)

![](img/24.png)

![](img/25.png)

15. Drag a **dropdown field** below the input field that is inside the container. Rename the **label** to **“Priority”** and configure the **option list**.

![](img/18.png)

16. A pop-up will appear where you need to `add` the **List of Values**. 

| Label     | Value |
| --------- | ----- |
| Immediate | 01    |
| Urgent    | 02    |

 and then click **Save**.

![](img/19.png)

![](img/20.png)

17. Select the **Priority** dropdown → click on the **Input Field** → select **Value** → choose **Data and Variables** → select **App Variables** → choose **Subject** → click **Save**.

![](img/26.png)

![](img/22.png)

![](img/23.png)

![](img/27.png)

![](img/28.png)

17.  Drag a **dropdown field** below the drop down field that is inside the container. Rename the **label** to **Registered Product** and click on **selected value**.

![](img/29.png)

![](img/22.png)

![](img/23.png)

![](img/30.png)

18. Click on the **Container**, go to **Layout**, select **Horizontal** layout, and click **Save**.

![](img/31.png)

19. Drag a **Container** onto the screen, then drag an **Input Field** inside the container.

![](img/33.png)

20. Click on the **Input Field**, then select the **Value** property.

![](img/32.png)

![](img/22.png)

![](img/23.png)

21. Set the value to `Imagepath` and click **Save**.

![](img/34.png)

22. Drag a **Button** below the input field, then select the button and update the label to **Upload**.

![](img/35.png)

23. Click on the **Button**, go to the **Style** tab, select **Primary Button**, edit the style, and set the **Background Color** to `Information`.

![](img/37.png)

![](img/36.png)

24. Click on the **Container**, navigate to the **Layout** tab, select **Layout**, set the orientation to **Horizontal**, and click **Save**.

![](img/38.png)

25. Click on the **Container**, navigate to the **Layout** tab, select **Layout**, set the orientation to **Horizontal**, and click **Save**.

![](img/38.png)

25. Drag the **Input** component onto the screen, navigate to the **Properties** tab, set **Multi input** to `true`, and click **Save**.

![](img/39.png)

25. Select the **Value** property and set it to `Description`.

![](img/41.png)

![](img/22.png)

![](img/40.png)

25. Select the **Input Field**, go to the **Layout** tab, goto **Width and Height** section and set **Custom**, and update the **Height** to **150 px**.

![](img/42.png)

26. Drag a **Button** below the input field, then select the button and update the label to **Create Case**.

![](img/43.png)

27. Click on the **Button**, go to the **Style** tab, select **Primary Button**, edit the style, and set the **Background Color** to `Information`.

![](img/44.png)

![](img/45.png)

27. Drag the **Title** component below the button. Select the **Title**, go to **Properties**, and set the **Content** to **CaseID**.

![](img/47.png)

![](img/22.png)

![](img/23.png)

![](img/48.png)

27. Drag the **Container** component and place it below the **Title** field.

![](img/49.png)

28. Drag another **Container** component inside the existing **Container**.

![](img/50.png)

29. Drag a **Title** component into the **Container** and rename the value to `Internal Purpose`.

![](img/51.png)

30. Drag a **Container** component below the **Container** component and drag `2` `text` fields

![](img/52.png)

31. Select the **first Text Field** and set its value to `Sentiment`.

![](img/52.png)

32. Select the **second Text Field**, then set the **Content** value to the `Sentiment` **App Variable**.

![](img/55.png)

![](img/22.png)

![](img/23.png)

![](img/56.png)

33. Select the **Container**, go to the **Layout** tab → **Layout**, and set it to **Horizontal**.

![](img/57.png)

34. Select the **Registered Product** drop down, and choose option list  **list of values**.

![](img/58.png)

34. Select **Mapping** → choose **Source Data** → select **Data and Variables** → choose **Data Variables** → select **RegisteredProduct** → click **Save**.
    Drag and map the required values as shown in the image.

![](img/60.png)

![](img/61.png)

![](img/62.png)

![](img/63.png)

![](img/64.png)

![](img/65.png)

![](img/66.png)

![](img/67.png)

![](img/106.png)

36. Select the **Upload** button, then click **Add Upload Logic**.

![](img/69.png)

37. Click on **Marketplace**, search for **Pick Files**, then click **Install**. After installation, drag the **Pick Files** component into the **Logic** canvas.

![](img/70.png)

![](img/71.png)

![](img/72.png)

![](img/73.png)

37. Drag the **App Variable** into the logic flow.
38. Select the **Variable Name**, choose **App Variables**, select the `Imagepath` variable, and click **Save**.

![](img/74.png)
![](img/75.png)
![](img/76.png)
![](img/77.png)

39. Select the **Assigned Value**, click **Formula**, and update the formula as shown below:

```
outputs["Pick files"].files[0].name
```

![](img/78.png)
![](img/79.png)
![](img/80.png)

40. Drag the **App Variable** **`file_extension`** into the logic flow and click **Assigned Value**.
    Update the **formula** as shown below:

```
IF(
  SLICE(SPLIT(appVars.file_name, "."), 1) == ["jpg"] ||
  SLICE(SPLIT(appVars.file_name, "."), 1) == ["jpeg"],
  "image/jpeg",
  IF(
    SLICE(SPLIT(appVars.file_name, "."), 1) == ["pdf"],
    "application/pdf",
    IF(
      SLICE(SPLIT(appVars.file_name, "."), 1) == ["png"],
      "image/png",
      false
    )
  )
)
```

![](img/81.png)


41. Open the **Marketplace**, search for **Convert File to Base64**, and click **Install**.

![](img/82.png)
![](img/83.png)
![](img/84.png)

42. Drag the **Convert File to Base64** component into the logic flow.
    Select **Source File URL**, click **Formula**, and enter the following:

```
outputs["Pick files"].files[0].path
```

Click **Save**.

![](img/85.png)
![](img/86.png)

43. Repeat the steps from **Step 41** to install an **HTTP Destination Request** integration.
        Once installed, select the **HTTP Destination Request** and enter the required values in the **Properties** section.
### HTTP Destination Request – Configuration Details

| Property          | Value                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destination       | `PK_AI_CORE`                                                                                                                                                                                                                                    |
| HTTP Method       | `POST`                                                                                                                                                                                                                                          |
| Request Body Type | `JSON`                                                                                                                                                                                                                                          |
| Request Body      | `{ "messages": [ { "role": "user", "content": [ { "type": "text", "text": "describe the scene and give as plain text" }, { "type": "image_url", "image_url": { "url": outputs["Convert file to base64"].base64 } } ], "max_tokens": 4096 } ] }` |
| Path              | `/v2/inference/deployments/df8a31891d109d48/chat/completions?api-version=2023-05-15`                                                                                                                                                            |
| Header            | `AI-Resource-Group`                                                                                                                                                                                                                             |
| Header Value      | `default`                                                                                                                                                                                                                                       |
| Response Type     | `Text`                                                                                                                                                                                                                                          |

![](img/87.png)

44. Drag the **App Variable** component into the logic flow and connect it after **Destination**, set the variable name to **description**, click **Formula**, and enter
`REPLACE_ALL(outputs["HTTP destination request"].resBodyParsed.choices[0].message.content, '"', '')`.

 ![](img/88.png)

45. Duplicate the existing **HTTP destination** configuration.

 ![](img/89.png)

46. Rename the duplicated destination to **sentiment**.
47. Update the request body to: `{"messages":[{"role":"user","content":appVars.Description + " Give your answer as a single word, either \"positive\" or \"negative\". Review text: " + appVars.Description}],"max_tokens":100,"temperature":0.0,"frequency_penalty":0,"presence_penalty":0,"stop":"null"}`

 ![](img/90.png)

48. Drag the **App Variable** component into the logic flow , set the variable name to **Sentiment**, click **Formula**, and enter
`outputs["Sentiment"].resBodyParsed.choices[0].message.content`.

 ![](img/91.png)

49. Duplicate the existing **HTTP destination-Sentiment** configuration.

 ![](img/91.png)

46. Rename the duplicated destination to **Category**.
47. Update the request body to: `{    "messages": [        {            "role": "user",            "content": appVars.Description+ "Give your answer as a single word or 2 words as example General Support → Data Privacy Request"},        {            "role": "system",            "content": "You are an agent that handles customer service tickets. Your job is to classify the tickets using company specific business requirements. Do not make up your own classification rules or guidelines. Once a classification value has been identified, update the ticket with that classification value. If a ticket is unable to be classified, do not perform any updates"        },        {            "role": "system",            "content": "Follow the rules below to determine the correct category and update the ticket accordingly. If a ticket does not match any category, do not perform any updates.\n\nClassification Rules:\nGeneral Support → Data Privacy Request 🔒\nSelect this category if the customer is requesting data deletion, privacy inquiries, or GDPR-related actions.\n\nGeneral Support → Address Change 🏡\nSelect this category if the customer requests an update or change of their registered address.\n\nSales Support → General Product Information 🛍️\nSelect this if the customer is inquiring about product details, features, or usage.\n\nSales Support → Credit Refund 💳\nSelect this if the request involves a refund, credit application, or reimbursement.\n\nSales Support → Pricing Information 💰\nSelect this if the request is about the cost, pricing plans, discounts, or promotional offers.\n\nSales Support → Availability Information 📦\nSelect this if the request is about product stock, availability, or expected restocking dates.\n\nComplaint → Unfriendly Service Employees 👎\nSelect this if the customer complains about rude, unhelpful, or unprofessional behavior from employees.\n\nComplaint → Bad Product Quality ❌\nSelect this if the issue concerns a defective, substandard, or poor-quality product.\n\nComplaint → Delivery Damaged 📦💥\nSelect this if the product arrived damaged due to transportation or packaging issues.\n\nComplaint → Missed Appointment 🚫\nSelect this if a scheduled service, installation, or meeting was not honored.\n\nComplaint → Delayed Delivery ⏳\nSelect this if the product did not arrive on time or was delayed.\n\nProduct Support → Software Issue 💻\nSelect this if the issue relates to software bugs, app malfunctions, or system crashes.\n\nProduct Support → Hardware Issue 🖥️\nSelect this if the issue concerns malfunctioning or defective hardware components.\n\nProduct Support → Mechanical Issue ⚙️\nSelect this if the issue is related to mechanical faults, wear and tear, or physical failures.\n\nProduct Support → Inquiry ❓\nSelect this if the ticket is a general product support question that doesn’t fit into a specific issue type.\n\nProduct Support → Preventive Maintenance 🔧\nSelect this if the ticket is about scheduled maintenance, inspections, or servicing.\n\nProduct Support → Installation Services 🏗️\nSelect this if the request involves setting up, assembling, or installing a product.\n\nProduct Support → Electrical Issue ⚡\nSelect this if the issue involves electrical malfunctions, power failures, or connectivity issues.\n\nProduct Support → Product Damaged 📦🔨\nSelect this if the product was received broken, scratched, or non-functional.\n\nProduct Support → Unknown ❔\nSelect this if the ticket cannot be classified into any of the predefined categories.\n\nAdditional Guidelines:\nStrictly follow the given categories and do not create custom classifications.\nIf a ticket is unclear, do not update the classification field.\nClassify based on content rather than assumptions—stick to explicit details in the ticket.\nWhen in doubt or unable find anything, choose \"Product Support \" instead of making assumptions. or always choose \"Product Support "        }    ],    "max_tokens": 100,    "temperature": 0.0,    "frequency_penalty": 0,    "presence_penalty": 0,    "stop": "null"}`

 ![](img/92.png)

48. Drag the **App Variable** component into the logic flow , set the variable name to **Category**, click **Formula**, and enter
> `outputs["Category"].resBodyParsed.choices[0].message.content`.

 ![](img/94.png)

 -------------------------

49. Duplicate the existing **HTTP destination-Category** configuration.

 ![](img/103.png)

46. Rename the duplicated destination to **Subject**.
47. Update the request body to: `{  "messages": [    {      "role": "user",      "content": "From the following detailed description, generate a concise TWO-WORD case title suitable for case creation. Use clear, meaningful words that summarize the issue. Description: " + appVars.Description    }  ],  "max_tokens": 10,  "temperature": 0.0,  "frequency_penalty": 0,  "presence_penalty": 0,  "stop": null}`

 ![](img/104.png)

48. Drag the **App Variable** component into the logic flow , set the variable name to **Subject**, click **Formula**, and enter
> `outputs["Subject"].resBodyParsed.choices[0].message.content`.

 ![](img/105.png)

 ----------------------------

49. Repeat the steps from **Step 41** to install an **HTTP Destination Request** integration.
        Once installed, select the **HTTP Destination Request** and enter the required values in the **Properties** section.

| Property          | Value                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Destination       | `PK_CX_Joule_Case`                                                                                                                                                                                                                                    |
| HTTP Method       | `POST`                                                                                                                                                                                                                                          |
| Request Body Type | `JSON`                                                                                                                                                                                                                                          |
| Request Body      | `{"isSelected":false,"isDisplayDocument":true,"fileName":outputs["Pick files"].files[0].name,"category":"DOCUMENT","type":"10001","isPrivate":false}` |
| Path              | `/document-service/documents`                                                                                                                                                            |
| Response Type     | `Text`                                                                                                                                                                                                                                          |

 ![](img/95.png)

48. Drag the **App Variable** component into the logic flow , set the variable name to **Notes_Url**, click **Formula**, and enter
> `outputs["HTTP destination request"].resBodyParsed.value.id`.

 ![](img/96.png)

49. Repeat the same process for another variable.Drag the **App Variable** component into the logic flow , set the variable name to **NotesUUID**, click **Formula**, and enter
> `outputs["Document destination"].resBodyParsed.value.uploadUrl`.

 ![](img/96.png)

50. Repeat the same process for another variable.Drag the **App Variable** component into the logic flow , set the variable name to **Notes_Url**, click **Formula**, and enter
> `outputs["HTTP destination request"].resBodyParsed.value.id`.

 ![](img/97.png)


51. Repeat the steps from **Step 41** to install an **Upload files** integration.
        Once installed, select the **Upload files** and enter the required values in the **Properties** section.

| Property        | Value                                                                             |
| --------------- | --------------------------------------------------------------------------------- |
| HTTP Method     | `PUT`                                                                             |
| Files to upload | `MAP(outputs["Pick files"].files, SET_KEY(item, "uploadUrl", appVars.Notes_Url))` |
| Headers         | `{"Content-Type": appVars.file_extension}`                                        |

 ![](img/98.png)

**Docusify format (table):**

51. Repeat the steps from **Step 41** to install an **HTTP Destination Request** integration; once installed, select **HTTP Destination Request** and configure the **Properties** as shown below.

| **Property**      | **Value**                                                        |
| ----------------- | ---------------------------------------------------------------- |
| Destination       | `PK_CX_JOule_Case`                                               |
| HTTP Method       | `POST`                                                           |
| Request Body Type | `JSON`                                                           |
| Request Body      | `{ "noteTypeCode": "S001", "htmlContent": appVars.Description }` |
| Path              | `/sap/c4c/api/v1/note-service/notes`                                            |
| Headers           | `Content-Type : application/json`                                |
|                   | `Accept : */*`                                                   |
| Name              | `Notes`                                                          |


 ![](img/99.png)

52. Duplicate the existing **HTTP destination-Notes** configuration.

 ![](img/100.png)

52. configure the **Properties** as shown below.

| **Property**      | **Value**                                                        |
| ----------------- | ---------------------------------------------------------------- |
| Destination       | `PK_CX_JOule_Case`                                               |
| HTTP Method       | `POST`                                                           |
| Request Body Type | `JSON`                                                           |
| Request Body      | `{    "subject": appVars.Subject,    "priority": appVars.Priority,    "origin": "MANUAL_DATA_ENTRY",    "caseType": "ZCAS",    "status": "02",    "account": {        "displayId": appVars.Account},    "description": {        "noteId": outputs["Notes"].resBodyParsed.value.id   },"attachments": [        {            "id": appVars.NotesUUID}    ],   "registeredProducts": [        {            "id": appVars.RegisteredProduct      }    ]}` |
| Path              | `/sap/c4c/api/v1/case-service/cases`                                            |
| Headers           | `Content-Type : application/json`                                |
|                   | `Accept : */*`                                                   |
| Name              | `Notes`                                                          |

 ![](img/101.png)

49. Repeat the same process for another variable.Drag the **App Variable** component into the logic flow , set the variable name to **CaseID**, click **Formula**, and enter
> `"Case ID: "+outputs["Case"].resBodyParsed.value.displayId`.

 ![](img/107.png)