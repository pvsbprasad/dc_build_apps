

# Set the Source and Target Languages

1. Drag the container and drag the two dropdowns to the container 

   ![](NewImg/6.gif)

   ![](NewImg/10image.png)

2. Select the **Container** → open the **Layout** option → choose **Horizontal** → click **Save**.

   ![](NewImg/11image.png)

3. Select the **first dropdown** → click **Option List** → choose **Mapping**.  

   ![](NewImg/12image.png)

3. Go to **Source Data**, Select **Binding Type as Data and variables**, and click on **Data and variables** 

   ![](NewImg/13image.png)

   ![](NewImg/14image.png)

   ![](NewImg/15image.png)

   ![](NewImg/16image.png)

4. Select the **languages** and click on **Save**  

   ![](NewImg/16image.png)

5. Now drag the **name** to **label** and  **bcpcode** to **value**  and click on **Save**  

   ![](NewImg/17image.png)

5. Repeat the process for the second dropdown simialar to  **(step 4 to Step 6)**
     ![](NewImg/17image.png)

6. In the **Container**, go to the **Properties** tab → set the **Label Text**  value as *Source Language* → then click on **Selected Value**.  
 
    ![](NewImg/18image.png)

    ![](NewImg/19image.png)

    ![](NewImg/49image.png)

    ![](NewImg/20image.png)

    ![](NewImg/21image.png)

7. Repeat the Steps for the 2nd drop down box (i.e. In the **Container**, go to the **Properties** tab → set the **Label Text**  value as *Target Language* → then click on **Selected Value**).  simialar to  **(step 8)**
 
    ![](NewImg/22image.png)

7. Drag a Container from the Core → from Primitives section drag Input and followed by Button.
Then, select the Container and set its alignment to Horizontal Center and Middle

  ![](NewImg/23image.png)

8. Click **Button** → open **Style** tab → select **Primary Card** → click **Edit**
  
  ![](NewImg/24image.png)

<!-- 9. Click **Background Color** → select  **Information**  → click **Save**
  
  ![](NewImg/25image.png) -->

10. Click button → Select **Properties** → set label Name as   **Upload**  → click **Save**
  
  ![](NewImg/26image.png)

10. Click on upload button → Select **BUTTON1** hyperlink which is in botton to write logic 
  
  ![](NewImg/27image.png)


12. Click Marketplace  
  
  ![](NewImg/28image.png)

13. Search `pick files`  → Select `Install`  → you can observe that pick files came to installed in `market place`
  
  ![](NewImg/29image.png)

  ![](NewImg/30image.png)

  Drag the `pick files` icon as showned in image

  ![](NewImg/31image.png)

14. Drag the App varaible  → Click the place holder to select the variable name to bind

  ![](NewImg/6.gif)

  ![](NewImg/32image.png)

   ![](NewImg/49image.png)

  ![](NewImg/33image.png)

  ![](NewImg/34image.png)



13. Select the App variable **PDFSourceFileName** and we need to **assign values** to App Variables:  
    - For **Sourcepath**, click on **Formula**, choose the output from another node:  
      `outputs["Pick files"].files[0].path`  
      Then click the **plus (+) icon → Add → Save**.  
      ![](NewImg/34image.png)

      ![](NewImg/35image.png)

      formaule   `outputs["Pick files"].files[0].name` and click **Save**

      ![](NewImg/36image.png)

      ![](NewImg/37image.png)

14. Repeat a similar step for `Sourcepath`:  
    - Click on **Formula**, choose the output from another node:  
      `outputs["Pick files"].files[0].path`  
      Then click the **plus (+) icon → Add → Save**.  

     ![](NewImg/38image.png)

15. Click Marketplace  → search for `convert file to base64` .repeat the steps like 17 Install and you can observer the same in `installed`

    ![](NewImg/39image.png)

15. Now, drag and drop **ConvertFileToBase64** followed by below steps and click on **Save**

       ![](NewImg/40image.png)

       ![](NewImg/41image.png)

       ![](NewImg/42image.png)

16. Now, drag and drop App variable and set **SourcefileBase64** followed by Assigned Value  and click on **Save**

    ![](NewImg/43image.png)

16. **Bind the app variable to `sourcefilebase64`.**  
    - For Assigned Value, click on **Formula**, then select the output from another node.  
    - Write formula as:  
      ```js
      SUBSTRING(outputs["Convert file to base64"].base64, 28)
      ```  
    - Next, click the **+ (Add)** icon, select **Add**, and finally click **Save**.  
    ![](img/16image.png)

---

17. Final step to convert – drag  **Button** rename button to `Translate document` in properties tab

   <!-- ![](NewImg/44image.png) -->


18. Click Marketplace  → search for `HTTP destination` .repeat the steps like 17 Install and you can observer the same in `installed`


19. Drag the **HTTP destination** and select the properties as shown below:

    ![](NewImg/44image.png)

    ![](NewImg/45image.png)

| **Field**           | **Value**                                                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Destination          | `PK_Translation`                                                                                                                           |
| HTTP Method          | `POST`                                                                                                                                     |
| Request Body Type    | `json`                                                                                                                                     |
| Path                 | `/api/v1/translation`                                                                                                                      |
| Request Body Example | ```{    "contentType": "application/pdf",    "encoding": "base64",    "sourceLanguage": appVars.SourceLanguage,    "targetLanguage": appVars.TargetLanguage,    "model": "default",    "data": appVars.SourcefileBase64}``` |


19. Click Marketplace  → search for `Download Base64 text as file (web only)` .repeat the steps like 17 Install and you can observer the same in `installed`

20. Drag the **Download Base64 text as file (web only)** option, set it to Base64, and apply the following formula:

      ![](NewImg/45image.png)

---

21. **Set formula as:**  
    ```js
    Base64 text = DECODE_BASE64(ENCODE_BASE64(outputs["HTTP destination request"].resBodyParsed.data))
    ```  
    ![](NewImg/47image.png)

---

22. **Set filename as:**  
    ```js
    appVars.TargetLanguage + "_" + appVars.pdfSourcefilename + ".docx"
    ```  
    ![](img/21image.png)  
   

23. Now ready to test. Click on **Preview**  
    ![](NewImg/48image.png)


24. Select the **Open web preview**  
   ![](img/24image.png)

25. Select your project  
   ![](img/25image.png)  
 
26. Select any [Download the pdf file](pages/03-lcnc/06-hands-on-sapbuildapps/NewImg/HandOver.pdf ':ignore :target=_self') the pdf file and click the **Translate Document** button  

  ![](NewImg/10.gif)

  ![](NewImg/50image.png)

  ![](NewImg/51image.png)

  ![](NewImg/52image.png)

  You can observe document is downloaded