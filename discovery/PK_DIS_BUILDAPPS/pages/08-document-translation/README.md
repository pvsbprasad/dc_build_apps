# PDF Translation

1. Click on the **dropdown** menu and select **Show all pages**.
   ![](im/1.png)

2. Click on the **three dots (⋮)** next to the required page and select **Duplicate**.
   ![](im/2.png)

3. Click on the **duplicated page** to open it.
   ![](im/3.png)

4. Navigate to the **Properties** tab and rename the Page name to **Document Translation**.
   ![](im/4.png)

5. Delete the Container
* Click on the **Container**.
* Click the **Bin (Delete) icon** to remove it.

  ![](im/5.png)

6. Add a New Container and Input Field

* Drag a **Container** component onto the canvas.
* Drag the **Input** field and place it inside the **Container**.

  ![](im/6.png)

7. Drag a **Button** into the same **Container** where the input field was placed, then rename the button to **Upload**.
   ![](im/7.png)

8. Select the **Container**, navigate to **Layout**, set the layout to **Horizontal**, and click **Save**.
   ![](im/8.png)

9. Click on upload button → Select BUTTON1 hyperlink which is in botton to write logic

   ![](im/9.png)

10. Click Marketplace

   ![](im/10.png)

11. Search pick files → Select Install → you can observe that pick files came to installed in market place

   ![](im/11.png)

   ![](im/12.png)

12. You can observe that pick files came to installed in `market place`
  
   ![](im/13.png)

  Drag the `pick files` icon as showned in image

   ![](im/14.png)

13. Drag the App varaible  → Click the place holder to select the variable name to bind

 ![](im/15.png)

 ![](im/17.png)

 ![](im/18.png)
    
 ![](im/19.png)

 ![](im/20.png)


13. Select the App variable **Sourcepath** and we need to **assign values** to App Variables:  
    - For **Sourcepath**, click on **Formula**, choose the output from another node:  
      `outputs["Pick files"].files[0].path`  
      Then click the **plus (+) icon → Add → Save**.  

     ![](im/21.png)

     ![](im/22.png)

      formaule   `outputs["Pick files"].files[0].path` and click **Save**

     ![](im/23.png)

14. Repeat a similar step for **`PDFSourceFileName`**:  
    - Click on **Formula**, choose the output from another node:  
      `outputs["Pick files"].files[0].name`  
      Then click the **plus (+) icon → Add → Save**.  
    
     ![](im/25.png)

     ![](im/24.png)

15. Click Marketplace  → search for `convert file to base64` .repeat the steps like 15 Install and you can observer the same in `installed`

   ![](im/29.png)

   ![](im/26.png)

   ![](im/27.png)

16. Now, drag and drop **ConvertFileToBase64** followed by below steps and click on **Save**

   ![](im/28.png)

   ![](im/31.png)

   ![](im/32.png)

  formaule `outputs["Pick files"].files[0].name` and click Save

   ![](im/33.png)

17. Now, drag and drop App variable and set **SourcefileBase64** followed by Assigned Value  and click on **Save**

   ![](im/30.png)

18. **Bind the app variable to `sourcefilebase64`.**  
    - For Assigned Value, click on **Formula**, then select the output from another node.  
    - Write formula as:  
      ```js
      SUBSTRING(outputs["Convert file to base64"].base64, 28)
      ```  
  
    ![](im/35.png)

    ![](im/36.png)

    ![](im/37.png)

19. Click Marketplace  → search for `HTTP destination` .repeat the steps like 17 Install and you can observer the same in `installed`

20. Drag the **HTTP destination** and select the properties as shown below:

    ![](im/38.png)

| **Field**           | **Value**                                                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Destination          | `PK_Translation`                                                                                                                           |
| HTTP Method          | `POST`                                                                                                                                     |
| Request Body Type    | `json`                                                                                                                                     |
| Path                 | `/api/v1/translation`                                                                                                                      |
| Request Body Example | ```{    "contentType": "application/pdf",    "encoding": "base64",    "sourceLanguage": appVars.SourceLanguage,    "targetLanguage": appVars.TargetLanguage,    "model": "default",    "data": appVars.SourcefileBase64}``` |


19. Click Marketplace  → search for `Download Base64 text as file (web only)` .repeat the steps like 15 Install and you can observer the same in `installed`

20. Drag the **Download Base64 text as file (web only)** option, set it to Base64, and apply the following formula:

   ![](im/39.png)

21. **Set formula as: `Base64 text`**  
    ```js
    DECODE_BASE64(ENCODE_BASE64(outputs["HTTP destination request"].resBodyParsed.data))
    ```  
   ![](im/40.png)


22. **Set filename as:**  
    ```js
    appVars.TargetLanguage + "_" + appVars.pdfSourcefilename + ".docx"
    ```  
    ![](im/40.png)

23. Click on **Add Item** to create a new entry in the navigation menu.
   - Select the newly added line from the list of items.
   - Rename the tab name to **Document Translation**.
   - From the page selection dropdown, choose the page **Document Translation**.
   - Save the changes to apply the updated tab name and page mapping.
   
     ![](im/44.png)

24. Now ready to test. Click on **Preview**  
     ![](im/41.png)

25. Select the **Open web preview**  
    ![](im/42.png)

26. Select any [Download the pdf file](im/HandOver.pdf ':ignore :target=_self') the pdf file and click the **Translate Document** button 

26. Click the **Upload** button, select the required **PDF file**, and click **Open**.
![](im/45.png)

27. Click the **Translate** button; the translated **PDF** will be automatically downloaded to the **Downloads** folder.
![](im/46.png)

You can observe document is downloaded



  




