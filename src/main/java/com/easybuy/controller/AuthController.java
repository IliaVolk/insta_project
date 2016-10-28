package com.easybuy.controller;

import com.easybuy.entity.auth.InstagramAuthResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/api/auth/")
public class AuthController {
    private final String CLIENT_ID = "0a0ee2a76f364730a3e3c1656baa89aa";
    private final String CLIENT_SECRET = "0ed2ff01353a45e29aee67d7004a7d5c";
    private final String GRANT_TYPE = "authorization_code";
    private final String REDIRECT_URL = "http://localhost:8080/api/auth/instagram/callback";
    private HttpClient client = new DefaultHttpClient();
    private final String URL = "https://api.instagram.com/oauth/access_token";
    private ObjectMapper mapper = new ObjectMapper();


    @RequestMapping(value = "instagram/callback", method = RequestMethod.GET)
    public String authInstagramCodeCallback(@RequestParam("code") String code, Model model) throws Exception {

        HttpPost post = new HttpPost(URL);

        List<NameValuePair> urlParameters = new ArrayList<>();
        urlParameters.add(new BasicNameValuePair("client_id", CLIENT_ID));
        urlParameters.add(new BasicNameValuePair("client_secret", CLIENT_SECRET));
        urlParameters.add(new BasicNameValuePair("grant_type", GRANT_TYPE));
        urlParameters.add(new BasicNameValuePair("code", code));
        urlParameters.add(new BasicNameValuePair("redirect_uri", REDIRECT_URL));

        post.setEntity(new UrlEncodedFormEntity(urlParameters));


        HttpResponse response = client.execute(post);

        InstagramAuthResponse object = mapper.readValue(response.getEntity().getContent(), InstagramAuthResponse.class);
        model.addAttribute("authCredentials", new String(mapper.writeValueAsBytes(object)));
        return "instagramAuthRedirect";
    }
}
