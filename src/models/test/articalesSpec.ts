import { Article, ArticleStore } from '../article';

const articale = new ArticleStore()

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(articale.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(articale.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(articale.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(articale.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(articale.index).toBeDefined();
  });

  it('create method should add a book', async () => {
    const result = await articale.create({
  title: 'Bridge to Terabithia',
  content: "content" as unknown as Text
});
    expect(result).toEqual({
      id: "1",
      title:"Bridge to Terabithia",
      content: "content" as unknown as Text
    });
  });

  it('index method should return a list of books', async () => {
    const result = await articale.index();
    expect(result).toEqual([{
      id: "1",
      title: 'Bridge to Terabithia',
      content: "content" as unknown as Text
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await articale.show("1");
    expect(result).toEqual({
      id: "1",
      title: 'Bridge to Terabithia',
      content: "content" as unknown as Text
    });
  });

  it('delete method should remove the book', async () => {
    articale.delete("1");
    const result = await articale.index()

    expect(result).toEqual([]);
  });
});
