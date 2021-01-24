package javawork.hello;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(description = "Pozdrav", urlPatterns = { "/Pozdrav",
    "/Pozdrav.do" })
public class Pozdrav extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  /**
   * @see HttpServlet#HttpServlet()
   */
  public Pozdrav()
  {
    super();
    // TODO Auto-generated constructor stub
  }
  
  /**
   * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
   *      response)
   */
  protected void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException
  {
    
    PrintWriter out = response.getWriter();
    Date datum = new Date();
    out.println("<html><body>" + "<h2>Zdravo studenti I smera, grupa <b>I2!</b></h2>" + "<br/> "
        + "<h3>Datum i vreme  su " + datum + "</h3>" + "</body></html>");
  }
  
  /**
   * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
   *      response)
   */
  protected void doPost(HttpServletRequest request,
      HttpServletResponse response) throws ServletException, IOException
  {
    // TODO Auto-generated method stub
  }
  
}