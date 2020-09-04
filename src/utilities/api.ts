interface HttpResponse<T> extends Response {
    parsedBody?: T;
}
export async function http<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
        request
    );

    response.parsedBody = await response.json();
    
    return response;
}

  
/** fetch products  */
export const fetchProduct = async () =>{
    let response: HttpResponse<[]>;
    try {
      response = await http<[]>(
        "/api/product/books"
      );
      return response;
    } catch (response) {
      return response;
    }

}

/** fetch product details */
export const fetchProductDetails = async (id: string) =>{
    let response: HttpResponse<[]>;
    try {
      response = await http<[]>(
        ["/api/product/book?id=",id].join('')
      );
      return response;
    } catch (response) {
      return response;
    }

}
